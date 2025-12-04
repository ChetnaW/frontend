import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss'],
  imports: [
    MatCardModule,
    MatProgressBarModule
  ]
})
export class Skills {

  skills = [
    { name: 'Angular', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'Express', level: 80 },
    { name: 'MongoDB', level: 85 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'UI/UX Design', level: 75 }
  ];

}