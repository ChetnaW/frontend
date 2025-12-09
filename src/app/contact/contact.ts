import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ContactService} from './contact.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { finalize } from 'rxjs';
import { Contact } from './contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule
  ]
})
export class Contact {
  contactForm: FormGroup;
  loading = false; // flag for submit button

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private snackBar: MatSnackBar
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.contactForm.invalid) {
      this.snackBar.open('Please fill all required fields correctly!', 'Close', { duration: 3000 });
      return;
    }

    this.loading = true;
    const contactData: Contact = this.contactForm.value;

    this.contactService.addContact(contactData)
      .pipe(finalize(() => this.loading = false))
      .subscribe({
        next: () => {
          this.snackBar.open('Message sent successfully!', 'Close', { duration: 3000 });
          this.contactForm.reset();
        },
        error: (err) => {
          console.error(err);
          this.snackBar.open('Failed to send message. Please try again.', 'Close', { duration: 3000 });
        }
      });
  }
}