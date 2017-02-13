//............................................................
//service does deleting, new registration forms, editing forms
//............................................................

import {StudentsRegistrationInterface} from '../interfaces/students-registration.interface';
export class StudentsRegistrationService{
    

    studentList: StudentsRegistrationInterface[] = [
        {id:33435345, fName: "Pam", mName: "Jessica", lName: "Sanders", age: 5, visibility: true}
        /*
        {id:30, fName: "Sarah", mName: "Jessica", lName: "Sanders", age: 15, visibility: true},
        {fName: "Frank", mName: "Tom", lName: "Wilson", age: 12},
        {fName: "Jill", mName: "Monica", lName: "Johnson", age: 18},
        {fName: "Nick", mName: "Chris", lName: "Clifton", age: 16}
        */
    ]

    getAllStudents(){
        return this.studentList;
    }

    //received new student from HTML -> component processRegistrationForm(data: any) -> here
    addNewStudent(receivedNewStudent: any){
        //create an ID for form data
        let id = Date.now();
        //we added new property to receivedNewStudent Array
        receivedNewStudent['id'] = id;
        receivedNewStudent['visibility'] = true;
        this.studentList.push(receivedNewStudent);
        console.log ( this.studentList );
    }

    deleteStudent(receivedStudentId: number): any{
        //console.log(receivedStudentId);
        let selectedRowNumber:number; //this is a basket that collects the actual row number that matches our receivedStudentId. we will then delete everything in basket
        let allStudents = this.studentList;
        //whenever you have an object you want to use a for statement
        allStudents.forEach(function (row, rowNumber){
            // if a row has a property of id && the row's id equals receivedStudentId
            if (( 'id' in row) && row.id === receivedStudentId)
            //if (( 'id' in row) && row.["id"] === receivedStudentId) can also use this way
            {
                //we have now found the row that contains the receivedStudentId value. then we store it in the basket.
                selectedRowNumber = rowNumber;
            }
        });

        //right now our basket can have our selected value or be empty.
        //first confirm if basket is empty
        if(typeof (selectedRowNumber) === 'undefined'){
            //the basket is empty. alert user that we could not find the requested student
            return "We could not find the student in our system.";
        }
        else{
            //the selected student is found in the basket. we now have the row number that stores the student data
            //Do actual deleting
            //console.log(selectedRowNumber);
            // search the list and find the selectedRowNumber when the student is going to be deleted
            
            
            //this.studentList.splice(selectedRowNumber,1);
            //the reason we can access the studentList here is because we specified a row in selectedRowNumber. studentList has multiple students so can't get general property
           let studentData = allStudents[selectedRowNumber];
           studentData["visibility"] = false;
           //studentData.visibility = false; another way of changing property
           this.studentList = allStudents;
            //delteStatus and studentsId are created here and send back to component
            return { deleteStatus: true, serviceReceivedStudentsID: receivedStudentId };
        }
    }

    getSelectedStudentId(id:number):any {
        let allStudents = this.studentList;
        let requiredRowNumber: number;
        allStudents.forEach( function(row, rowNumber){
            if(('id' in row) && (row.id ===id)){
                requiredRowNumber = rowNumber;
            }
        });
        //if (isNaN(requiredRowNumber)){ another option you can use
        if(typeof (requiredRowNumber) === 'undefined'){
            return "We could not find the student in our system.";
        }
        else{
            
            return allStudents[requiredRowNumber];
        }
    }

    public singleStudentData ( rowNum ) {
        return this.studentList[rowNum];
    }

    restoreDeleted(receivedStudentId: number):any{
        let selectedRowNumber: number;
        this.studentList.forEach( function( row, rowNumber){
            if(('id' in row)&& (receivedStudentId===row.id)){
                selectedRowNumber = rowNumber;
            }
        });

        if(typeof (selectedRowNumber) === 'undefined'){
            return false;
        }
        else{

          let studentDetails = this.singleStudentData (selectedRowNumber );
          console.log ( studentDetails );
          studentDetails.visibility = true;
            //console.log(this.studentList[selectedRowNumber]);
            return true;
        }
        //console.log(receivedStudentId);
    }   
    //received data that was edited and ID of where what row was supoosed to be edited
    // editedData is object of edited form
    //studentID is id property of student
    processEditedStudentInformation(editedData, studentID):any{
        let requiredRowNumber;
        this.studentList.forEach (function (row,rowNumber){
            if(("id" in row)&&(row.id === studentID)){
                requiredRowNumber = rowNumber;
            }
        });

        if( typeof (requiredRowNumber) === 'undefined'){
            return "We could not find the student by the provided ID in order for us to edit";
        }
        else{
            editedData["id"]=studentID;
            editedData["visibility"]=true;
            this.studentList.splice(requiredRowNumber,1, editedData);
            this.studentList = this.studentList;
            return true;
        }

    }

    
    
}