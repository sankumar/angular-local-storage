import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
router = inject(Router);
  onLogout() {
    localStorage.clear();
    this.router.navigateByUrl('login');
  }
}
