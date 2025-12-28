import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./ui-ux/navbar/navbar";
import { Footer } from "./ui-ux/footer/footer";
import { Contacts } from './Pages/contacts/contacts';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('SECONDANGULAR1');
}
