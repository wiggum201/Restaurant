import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {ControlGroup} from 'angular2/common';
import {Control} from 'angular2/common';
import {Validators} from 'angular2/common';
import {ReservationsService} from '../services/editPracticeForm.service';

import 'jQuery';
declare var $:any;
import 'bootstrapJs';
import 'bootstrapDatePicker';
import 'bootstrapTimePicker';

@Component({
    //from main.html
    selector: 'edit-form-practice-component',
    templateUrl: 'app/templates/editFormPractice.html',
    providers: [ReservationsService]
})

export class EditFormPracticeComponent implements OnInit{

     reservationForm: any;
    allReservations: any;
    allContacts: any;
    selectedID: number;
    isInEditMode: boolean = false;
    isConfirmationDialogVisible: boolean = false;
    //is there data in the service/database
    isStudentRegistryEmpty: boolean = true;

     


    constructor(private reservationsService: ReservationsService ){
        this.allReservations = reservationsService.getAllReservations();
        
    }

    ngOnInit(){
        $('.datepicker').datepicker({
            format: 'mm/dd/yyyy',
            startDate: 'now',
            daysOfWeekDisabled: '0'
        });
        $('#timepicker2').timepicker();
        //initialization of Form once component has been fully rendered. when page first opens
        this.newFormInstance(); 
    }

    //this clears form by creating a new form instance. 
    newFormInstance():void{
        //reservationForm is an object with properties. new instance of control group
        this.reservationForm=new ControlGroup({
            'name': new Control(''),
            'email': new Control(''),
            'date': new Control(''),
            'time': new Control( '09:00 AM' ),
            'seats': new Control(''),
            'table': new Control('')
        });
    }
    //resets newFormInstance but having it relevant to it's work. made for readability. used when user submits form
    resetForm(){

        for(let property in this.reservationForm.controls){
            //checks the property value in ControlGroup.control
            (this.reservationForm.controls[property]).updateValue("");
        }


        
    }
    
    /*
    validateTime(control:any):any{
            let time = control.value;
            if(isNaN (time) || time>25) return{ 'time':true };
            return null;
        }
    */

    
    // custom made validations made in the controls. not used. not called in HTML but from Control and ControlGroup
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
    processReservation(data:any ){
        if(this.isInEditMode===false){
            this.reservationsService.addNewReservation(data);
        }
        else{
            this.reservationsService.updateEditedReservation(data, this.selectedID);
            this.isInEditMode = false;
            
        }
        this.resetForm();

        /*
        if(this.isInEditMode===false){
            this.reservationsService.addNewReservation ( data );
        }
        else{
            
            this.reservationsService.updateEditedReservation(data, this.selectedID);
            this.isInEditMode=false;

        }
         
         
        //used to reset form once user submits
        this.resetForm ();
        */
    }

    deleteReservation(dataId:number){
        this.isConfirmationDialogVisible = true;
        $( "#dialog-" + dataId ).css({"display": "block"});
        this.selectedID = dataId;
        
        
        // //calls the deleteReservationData function
        // let newData = this.reservationsService.deleteReservationData(dataId);
        // this.allReservations = newData; // refreshes the data on the user interface after service is finished deleting
               
    }

    editReservation(dataId:number){

        this.isInEditMode = true;
        this.selectedID = dataId;
        let editedDetails = this.reservationsService.updateRegistration(dataId);
        let updatedDetails = this.reservationsService.findUpdatedDetails(dataId);
        this.updateReservation(editedDetails);
        

        /*
        let editedDetails = this.reservationsService.updateRegistration(dataId);
        this.updateReservation(editedDetails);
        this.isInEditMode = true;
        let updatedDetails = this.reservationsService.findUpdatedDetails(dataId);
        this.selectedID=dataId;
        */
        
    }
    updateReservation(editedDetails){
        this.reservationForm.controls['name'].updateValue(editedDetails.name);
        this.reservationForm.controls['email'].updateValue(editedDetails.email);
        this.reservationForm.controls['date'].updateValue(editedDetails.date);
        this.reservationForm.controls['time'].updateValue(editedDetails.time);
        this.reservationForm.controls['seats'].updateValue(editedDetails.seats);
        this.reservationForm.controls['table'].updateValue(editedDetails.table);

        /*        
        this.reservationForm.controls['name'].updateValue(editedDetails.name);
        this.reservationForm.controls['email'].updateValue(editedDetails.email);
        this.reservationForm.controls['date'].updateValue(editedDetails.date);
        this.reservationForm.controls['time'].updateValue(editedDetails.time);
        this.reservationForm.controls['seats'].updateValue(editedDetails.seats);
        this.reservationForm.controls['table'].updateValue(editedDetails.table);
        */
        
    }
    checkDialogBoxSelection(userBtnSelection:boolean, dataId:any="variable is ignored"){
        if (userBtnSelection === true){
            this.reservationsService.deleteReservationData(dataId);
            this.isConfirmationDialogVisible = false;
        }
       else{
           this.isConfirmationDialogVisible = false;
       }
    }

    
}


}

