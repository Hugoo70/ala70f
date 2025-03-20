import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}

  login() {
    // Aquí puedes agregar la lógica de autenticación
    this.router.navigate(['/home']); // Redirige al home después de iniciar sesión
  }
}
