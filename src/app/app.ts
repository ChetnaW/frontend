import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import {Home} from './home/home';
import {About} from './about/about';
import {Skills} from './skills/skills';
import {Contact} from './contact/contact';
import {Footer} from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Home, About, Skills, Contact, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('portfolio');
}
