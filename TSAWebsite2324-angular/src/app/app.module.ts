import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ReservationComponent } from './reservation/reservation.component';
import { MembershipComponent } from './membership/membership.component';
import { ReferencesComponent } from './references/references.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReservationPageComponent } from './reservation-page/reservation-page.component';
import { PlanWorklogComponent } from './plan-worklog/plan-worklog.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { CopyrightPageComponent } from './copyright-page/copyright-page.component';
import { MembershipReceivedComponent } from './membership-received/membership-received.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AboutUsComponent,
    CalendarComponent,
    ReservationComponent,
    ReservationPageComponent,
    MembershipComponent,
    PlanWorklogComponent,
    DocumentationComponent,
    MembershipReceivedComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'about-us', component: AboutUsComponent, pathMatch: 'full' },
      { path: 'calendar', component: CalendarComponent, pathMatch: 'full' },
      { path: 'membership', component: MembershipComponent, pathMatch: 'full' },
      { path: 'reservation', component: ReservationComponent, pathMatch: 'full' },
      { path: 'references', component: ReferencesComponent, pathMatch: 'full' },
      { path: 'reservation-received', component: ReservationPageComponent, pathMatch: 'full' },
      { path: 'copyright', component: CopyrightPageComponent, pathMatch: 'full' },
      { path: 'worklog', component: PlanWorklogComponent, pathMatch: 'full' },
      { path: 'documentation', component: DocumentationComponent, pathMatch: 'full' },
      { path: 'membership-received', component: MembershipReceivedComponent, pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
