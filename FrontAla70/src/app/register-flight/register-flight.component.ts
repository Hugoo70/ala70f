import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-flight',
  templateUrl: './register-flight.component.html',
  styleUrls: ['./register-flight.component.css']
})
export class RegisterFlightComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/home']); // Redirige al Home
  }
}
