import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FooterComponent } from "./MyComponents/footer/footer.component";
import { HeaderComponent } from "./MyComponents/header/header.component";
import { FormComponent } from "./MyComponents/form/form.component";
import { MainComponent } from "./MyComponents/main/main.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, FooterComponent, HeaderComponent, FormComponent, RouterLink, RouterLinkActive, MainComponent, MainComponent]
})
export class AppComponent {
    title = 'resume';
}
