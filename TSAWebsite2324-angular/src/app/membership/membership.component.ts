import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrl: './membership.component.css'
})
export class MembershipComponent {

  daysArray: number[] = Array.from({ length: 31 }, (_, i) => i + 1);

  reservationFormGroup: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {

    this.reservationFormGroup = this.fb.group({
      emailAddress: ['', [Validators.required, Validators.email]],
      reservationDate: ['', [Validators.required]],
      timeSlot: ['', [Validators.required]]
    });

  }

  submitReservation() {
    if (this.reservationFormGroup.valid) {
      this.router.navigate(['/reservation-received']);
    }

    
  }
}
