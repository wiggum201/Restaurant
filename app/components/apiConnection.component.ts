import {Component, OnInit} from 'angular2/core';
import {APIConnectionService} from '../services/apiConnection.service';
import {ControlGroup, Control} from 'angular2/common';

@Component({
    //from main.html
    selector: 'api-connection-component',
    templateUrl: 'app/templates/apiConnection.html',
    providers: [APIConnectionService]
})



export class APIConnectionComponent implements OnInit{
    
    allRoomBookings: any;
    showLoading: boolean = true;
    showServerError:boolean = false;
    posts: any;
    inEditMode: boolean = false;
    editFormControlGroup:any;

    formErrors: any={};
       
    constructor(private apiConnectionService:APIConnectionService){
    }

    ngOnInit(){
        this.subscribeToServiceToGetAllBookingsOnceTheyAreReady();
        this.getAllPosts ();
    }

    subscribeToServiceToGetAllBookingsOnceTheyAreReady(){
        //subscribe - listens to service method which does the acuatl http request
        this.apiConnectionService.getAllBookings().subscribe(// subscribe to service
            data => {
                this.showLoading = false;
                this.allRoomBookings=data;// data variable is from map if incase map returns a value without failure
            },
            error => {
                this.showServerError = true;
                console.log('error communicating to the server.')// error => is the second paramter in function
            }
        );

    }

    btnSendForm(formData){
        //Confirm if user filled the form as required.

        //If form is empty, stop execution immediately and alert the user to provide data
        //All fields to be validated

        
        let fields = [ 'id', 'date', 'name', 'room' ];
        let errors: any = {};
        let generalErrorStatus = false;
        fields.forEach ( ( field ) => {//field is the value of the property, field is same as the usual rowItemObject
            var data = formData[field];
            //ID Validation
            if ( field === 'id' ) { 
                var checkerFeedBack = this.customValidate_id ( data );
                errors["id"] = ( checkerFeedBack.status === true ) ? checkerFeedBack : null;
                generalErrorStatus = ( checkerFeedBack.status === true ) ? true : generalErrorStatus;

             }

             //Date Validation
             if (field === 'date'){
                 var checkerFeedBack = this.customValidate_date ( data );
                errors["date"] = ( checkerFeedBack.status === true ) ? checkerFeedBack : null;
                generalErrorStatus = ( checkerFeedBack.status === true ) ? true : generalErrorStatus;
             }

             if (field === 'name'){
                 var checkerFeedBack = this.customValidate_name(data);
                 errors["date"] = (checkerFeedBack.status === true) ? true: generalErrorStatus;
             }
             if (field === 'room'){
                 var checkerFeedBack = this.customValidate_room(data);
                 errors["room"] = (checkerFeedBack.status === true) ? true: generalErrorStatus;
             }

             
        } );

       
        if ( generalErrorStatus ) {
            return;
        }

        //Reset form errors 
        this.formErrors = {};
        

        //In case user has filled the form correctly, then proceed to the service.

        formData['visibility'] = 1;
        this.apiConnectionService.addNewReservation(formData).subscribe(
            response => {                
                console.log ( 'Great! server has added the new booking to the database.' );
                //Update uset interface before we begin tedious server Communication
                this.allRoomBookings.push(formData);

            },
            error => console.log("component error"+error)
        );        
    }

    customValidate_id ( data ): any {
        //Check if id is empty
        if (data === null){ 
            var er = { status: true, msg: "Please provide an ID. It is required" };
            this.formErrors['id']= er;
            return er;
        }
        //In case is not an integer
        if ( !parseInt(data, 10)) {
            var er = { status: true, msg: "Ensure Id is an integer" };
            this.formErrors['id']= er;
             return er;
        }
        return {status: false};
    }

    customValidate_date (data):any{
        //check if date is incorrect
        if (data === null){
            let er = { status: true, msg: "Please provide a date. It is required" }; // define status
            this.formErrors['date']= er;
            return er;
        }
        //check if date is a valid date
        let dateRegExp = /(0[1-9]|[12][0-9]|3[01])[-](0[1-9]|1[012])[-](19|20)[0-9]{2} (2[0-3]|[0-1][0-9]):[0-5][0-9]/;
        if (data.match(dateRegExp) === null){
            let er = { status: true, msg: "Please provide a date in the format dd-mm-yyyy hh:mm:ss" }; // define status
            this.formErrors['date']= er;
            return er;
        }

        return {status: false};// define status
    }

    customValidate_name(data):any{
        //check if name field is entered
        if (data === null){
            let er = {status:true, msg: "Please provide a name. It is required"};
            this.formErrors['name']= er;
            return er;
        }

        
        //check if valid name

        let firstCharacter = data.charAt(0);
        let endingCharacters = data.substring(1,4);
        let checkAlphaCharacter = /^[a-zA-Z]+$/;
        let checkNumbercharacter = !parseInt(endingCharacters, 10);
        if (data.length !=4 && firstCharacter.macth(checkAlphaCharacter) && checkNumbercharacter){
            let er = {status:true, msg: "Please provide a room number with one letter followed by three numbers"};
            this.formErrors['name']=er;
            return er;
        }
        
        // if (data.length != 4){
        //     let er = {status:true, msg: "Please provide a room number with one letter followed by three numbers"};
        //     this.formErrors['name']=er;
        //     return er;
        // }
        
    }

    customValidate_room(data):any{
        //check if name field is entered
        if (data === null){
            let er = {status:true, msg: "Please provide a room number. It is required"};
            this.formErrors['room']= er;
            return er;
        }
        //check if valid name
        let nameRegExp = /^[a-zA-Z]+$/;
        if (data.match(nameRegExp) === null){
            let er = {status:true, msg: "Please provide a proper room number using. It must have one letter followed by 3 numbers"};
            this.formErrors['name']=er;
            return er;
        }
    }

    getAllPosts(){
        this.apiConnectionService.getAllPosts().subscribe(
            result => {
                this.showLoading = false;
                this.posts = result;
            },
            error => {
                alert("Communication to server failed");
            }
        );
    }

    deletePost(receivedPostId:number){
        this.apiConnectionService.deletePostFromDatabase( receivedPostId ).subscribe(
            response => {
                this.apiConnectionService.getAllPosts().subscribe(
                    result => {
                        // this.posts = result;
                        console.log ( result );
                    },
                    error => {
                        console.log(error);
                    }
                ); 
            },
            error => {
                console.log(error);
            }
        );
    }

    btnDeleteBooking(id:number){//only for http connection. no quieries 
        this.apiConnectionService.deleteBooking(id).subscribe(
            feedback => {
                //after successfully deleting call method to update user interface 
                this.updateUIAfterDeleting(id);
            },
            error => {
                console.log(error);
            }
        );

    }
    updateUIAfterDeleting(id: number){
       let bookings = this.allRoomBookings;
       let rowIndex = false;
       bookings.forEach(function(rowObject,rowNumber){
           if (rowObject.id == id){
               rowIndex = rowNumber;
           }
       });
       if (rowIndex !== false){
           this.allRoomBookings.splice(rowIndex,1);
       }
    }

    btnEditBooking(row:any){
        this.inEditMode = true;
        this.editFormControlGroup = new ControlGroup({
            'id': new Control(row.id),
            'date': new Control(row.date),
            'name': new Control(row.name),
            'room': new Control(row.room)

        });

        
    }

    btnSaveEditedData(data:any){
        //.subcscribe has 2 callback methods, 1. when server communication was successful 2.When it failed. subscribe ( function (res) {}, function (er) {} );
        this.apiConnectionService.editedNewSavedBookingData(data).subscribe(
            response =>{
                
                this.inEditMode = false;
                //update user interface
                this.updatesUIAfterEditBooking(data);
                
            },
            error => {
                console.log(error);
            }

        );

    }

    updatesUIAfterEditBooking(data:any){
        let selectedRowNumber:any = false;

        this.allRoomBookings.forEach(function(rowObject,rowNumber){
            if(rowObject['id'] == data.id){
                selectedRowNumber = rowNumber;
            }
        });
        if(selectedRowNumber !== false){this.allRoomBookings.splice(selectedRowNumber,1,data)};
        

    }


}