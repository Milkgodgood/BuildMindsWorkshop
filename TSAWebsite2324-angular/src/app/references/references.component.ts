import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrl: './references.component.css'
})
export class ReferencesComponent {

  constructor(private router: Router) {

  }

  goToCopyright() {
    this.router.navigate(['/copyright']);
  }

  goToWorklog() {
    this.router.navigate(['/worklog']);
  }

  goToDocumentation() {
    this.router.navigate(['/documentation']);
  }
}
