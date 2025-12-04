import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss'],
  imports: [
    MatIconModule
  ]
})
export class Footer {

  year = new Date().getFullYear();

}