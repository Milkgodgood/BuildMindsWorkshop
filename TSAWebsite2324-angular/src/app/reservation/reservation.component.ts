import {  Component } from '@angular/core';
//import { ReservationForm } from '../../assets/ReservationForm';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent {

  //reservationForm: ReservationForm = new ReservationForm();

  //reservationFormGroup: FormGroup;

  //constructor(private cdr: ChangeDetectorRef, private fb: FormBuilder, private router: Router) {

  //  this.reservationFormGroup = this.fb.group({
  //    emailAddress: ['', [Validators.required, Validators.email]],
  //    timeSlot: ['', [Validators.required]]
  //  });

  //}

  submitReservation() {
    //this.router.navigate(['/submit-confirmed']);
  }

}
