import {Component} from 'angular2/core';
import {FooterComponent} from '../components/footer.component';
import {HeaderTemplateComponent} from '../components/headerTemplate.component';
import {ReservationFormComponent} from '../components/reservationForm.component';
import {ReservationsService} from '../services/reservations.service';

@Component({
    //from main.html
    selector: 'reservation-component',
    templateUrl: 'app/templates/reservation.html',
    directives: [FooterComponent, HeaderTemplateComponent, ReservationFormComponent],
    providers: [ReservationsService]
})

export class ReservationComponent{
    allReservations: any;
    pageHeaderVars: any;

    constructor(reservationsService: ReservationsService){
        this.pageHeaderVars = { img: 'headerTemplate2.jpg', thinHeading: 'Reservation', boldHeading: 'Photography', andSign: true, caption: 'Take a look at the place, the people and the food…' }
        this.allReservations = reservationsService.getAllReservations();

    }
}