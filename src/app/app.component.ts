import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { HomeComponent } from "./Components/home/home.component";
import { HeaderComponent } from "./Components/header/header.component";
import { FooterComponent } from "./Components/footer/footer.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, ButtonModule, HomeComponent, HeaderComponent, FooterComponent]
})
export class AppComponent {
  title = 'ECommerce';
}
