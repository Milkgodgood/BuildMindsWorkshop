import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrl: './membership.component.css'
})
export class MembershipComponent {
  membershipFormGroup: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {

    this.membershipFormGroup = this.fb.group({
      emailAddress: ['', [Validators.required, Validators.email]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      membershipType: ['', [Validators.required]]
    });

  }

  submitReservation() {
    if (this.membershipFormGroup.valid) {
      this.router.navigate(['/membership-received']);
    }

    
  }
}
