import {ReservationsInterface} from '../interfaces/reservations.interface';

export class ReservationsService {
    reservations: ReservationsInterface [] = [
        {id: 23, name: "Samson", email: "sam@gmail.com", date: "12/12/2016", time:"07:00 AM", seats: 4, table: 6 },
        {id: 25, name: "Dan", email: "dan@test.com", date: "12/12/2016", time:"07:00 AM", seats: 2, table: 7 }
    ];
   

    getAllReservations(){
        return this.reservations;
    }

    addNewReservation(receivedNewStudent:any):void{
       let id = Date.now();
       receivedNewStudent['id']=id;
       this.reservations.push(receivedNewStudent);
       //this.getAllReservations();
       






       /* 
        let newReservation:any = [];
        newReservation['id'] = Date.now();
        newReservation['name'] = data.name;
        newReservation['email'] = data.email;
        newReservation['date'] = data.date;
        newReservation['time'] = data.time;
        newReservation['seats'] = data.seats;
        newReservation['table'] = data.table;

        console.log (newReservation);
       
        this.reservations.push(newReservation);
        */
    }
    
    deleteReservationData(selectedId:number):any{
        let allReservations = this.getAllReservations();

        let selectedRowNumber:number;

        //item is one entire row ex:{id: 23, name: "Samson", email: "sam@gmail.com", date: "12/12/2016", time:"07:00 AM", seats: 3, table: 7 },
        //index is row number ex: 0 for first row 

        allReservations.forEach( function(rowItem, rowNum){
            //"id" the property in the row item
            if("id" in rowItem  && (rowItem["id"]==selectedId)){
                
                selectedRowNumber = rowNum;
            } 
        } );
        if(typeof (selectedRowNumber) === "undefined" ){
            //undefined means selectedRowNumber was never updated. meaning that the passed Id from HTML/browser does not exist anywhere in database
            return 'item NOT been found';
        }
        else{
            //updating the database to delte selected item
            allReservations.splice(selectedRowNumber, 1);
            this.reservations=allReservations;
            return this.reservations; // this returns updated boject. the component then receives the new data variable
        }
        //console.log(selectedIndex);
        //allReservations.splice(0,1);
        // this.reservations=allReservations;
        // return this.reservations;

    }

    findUpdatedDetails(dataId){
        let selectedRow = this.receivedDataToRowIndexGeneralMethod(dataId);
        return this.reservations[selectedRow];
    }

    updateEditedReservation(editedData:any ,dataID:number):any{
        let rowNumber = this.receivedDataToRowIndexGeneralMethod(dataID);
        //right now editedData does not contain the ID property. we have to add it before splicing. Now we have 6 properties and splice requires 7 properties
        editedData['id']=dataID;
        console.log(editedData);
        //we pick the initial object and directly change it's values so it now contains different values. and it can be accessed anywhre in the service class as a new object
       this.reservations.splice(rowNumber,1, editedData);
        
    }

    updateRegistration(dataId):any{
        let selectedIndex = this.receivedDataToRowIndexGeneralMethod(dataId);
        let editedDetails = this.reservations[selectedIndex];
        return editedDetails;

    }

    receivedDataToRowIndexGeneralMethod(selectedId):any{
        let allReservations = this.getAllReservations();

        let selectedRowNumber:number;

        //item is one entire row ex:{id: 23, name: "Samson", email: "sam@gmail.com", date: "12/12/2016", time:"07:00 AM", seats: 3, table: 7 },
        //index is row number ex: 0 for first row 

        allReservations.forEach( function(rowItem, rowNum){
            //"id" the property in the row item
            if("id" in rowItem  && (rowItem["id"]==selectedId)){
                
                selectedRowNumber = rowNum;
            } 
        } );
        if(typeof (selectedRowNumber) === "undefined" ){
            //undefined means selectedRowNumber was never updated. meaning that the passed Id from HTML/browser does not exist anywhere in database
            return 'item NOT been found';
        }
        else{
            
            return selectedRowNumber;
        }
    }
    
    
    
}
