import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importa RouterModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule, CommonModule] // IMPORTANTE: Agregar RouterModule aquí
})
export class AppComponent {
  title = 'FrontAla70';
}

