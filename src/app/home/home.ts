import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  imports: [
    MatButtonModule,
    MatCardModule
  ]
})
export class Home{

  team = [
    { name: 'Neha', role: 'Frontend Developer', photo: 'assets/team1.jpg' },
    { name: 'Rahul', role: 'Backend Developer', photo: 'assets/team2.jpg' },
    { name: 'Priya', role: 'UI/UX Designer', photo: 'assets/team3.jpg' },
    { name: 'Aakash', role: 'Full Stack Developer', photo: 'assets/team4.jpg' }
  ];
}
