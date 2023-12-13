import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { AppComponent } from '../../app.component';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent, AppComponent,FooterComponent, RouterLink, RouterLinkActive, HeaderComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

}
