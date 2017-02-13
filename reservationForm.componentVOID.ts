import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {ControlGroup} from 'angular2/common';
import {Control} from 'angular2/common';
import {Validators} from 'angular2/common';
import {ReservationsService} from '../services/reservations.service';


import 'jQuery';
declare var $:any;
import 'bootstrapJs';
import 'bootstrapDatePicker';
import 'bootstrapTimePicker';

@Component({
    // from reservation.html
    selector: 'reservation-form-component',
    templateUrl: 'app/templates/reservationForm.html',
    providers: [ReservationsService]
})

export class ReservationFormComponent implements OnInit{
    reservationForm: any;

    constructor(reservationsService: ReservationsService){

    }

    ngOnInit(){
        $('.datepicker').datepicker({
            format: 'mm/dd/yyyy',
            startDate: 'now',
            daysOfWeekDisabled: '0'
        });
        $('#timepicker2').timepicker();
        
        this.reservationForm= new ControlGroup({
            'name': new Control('', Validators.compose([
               Validators.required,
               Validators.pattern ( '^[a-zA-Z]+$' )
            ])),
            'email': new Control('',Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')
            ])),
            'date': new Control('',Validators.required),
            'time': new Control('', Validators.compose([
                Validators.required,
                 
            ])),
            'seats': new Control('', Validators.compose([
                Validators.required,
                this.validateSeats
            ])),
            'table': new Control('', Validators.compose([
                Validators.required,
                this.validateTable
            ]))
        });
    }

    
    /*
    validateTime(control:any):any{
            let time = control.value;
            if(isNaN (time) || time>25) return{ 'time':true };
            return null;
        }
    */
    validateSeats(control:any):any{
        let opening = control.value;
        if(isNaN (opening) || opening>8 || opening<1) return{ 'seats':true };
        return null;
    }
    validateTable(control:any):any{
        let opening = control.value;
        if(isNaN (opening) || opening>8 || opening<1) return{ 'table':true };
        return null;
    }
    /*
    validateName(control:any):any{
        let name = control.value;
        if(name.length <3 ) return{ 'name': true};
        
    }
    */




    // submit button
    processReservation(data:any){
        console.log(data);
    }

}