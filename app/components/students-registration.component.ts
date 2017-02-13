import {Component, OnInit} from 'angular2/core';
import {FooterComponent} from '../components/footer.component';
import {HeaderTemplateComponent} from '../components/headerTemplate.component';
import {Control, ControlGroup} from 'angular2/common';
import {StudentsRegistrationService} from '../services/students-registration.service';
import { UICalculator } from '../components/ui-calculator.component';



@Component({
    //from main.html
    selector: 'students-registration-component',
    templateUrl: 'app/templates/students-registration.html',
    directives: [FooterComponent, HeaderTemplateComponent, UICalculator],
    providers: [StudentsRegistrationService]
})

export class StudentRegistrationComponent implements OnInit{
    //header text
    pageHeaderVars: any;
    //form Control Group variable
    newRegistrationFormInstance: any;
    //get All Students Details
    receivedStudentRegistrationCommand: any;
    //is there data in the service/database
    isStudentRegistryEmpty: boolean = true;
    // default false means formEditStatus is in registration mode
    //enable us to dect when form in registration mode/editing mode, false means Register and true means editing mode
    formEditStatus: boolean= false;
    //prompts when click yes button on confirmation form
    showRestoreDialog: boolean = false;
    //when deleting a student. gets data when selects a student to be deleted. gets index information and ID
    selectedStudentID: any = false;
    //prompts when click dete button
    showConfirmationDialog: boolean = false;
    //checks confirmation prompt of yes or no
    isConfirmationYes: boolean = true;

   
    

    constructor(private studentsRegistrationService: StudentsRegistrationService){
        this.pageHeaderVars = { img: 'headerTemplate2.jpg', thinHeading: 'Students Registration', boldHeading: 'Photography', andSign: true, caption: 'Register Here…' }
        this.receivedStudentRegistrationCommand = studentsRegistrationService.getAllStudents();   
        if ( ! (this.receivedStudentRegistrationCommand.length==0 ) ) {
            this.isStudentRegistryEmpty= false;
        }   
        
    }

    ngOnInit(){
        this.createNewFormInstance();
    }

    //happens when page first loads. clears forms. can also clear form after submitted
    createNewFormInstance(edit=false, studentData=null){
        //edit=false is optional paramater which when forminstance on ngOnIt editing is initially false and student data is null. it enables us to have form default to have no values or passed values from studentData
        //initiale blank values
        //if statement to compare studenData if null or has values
        //this is type script section
        let fNameValue = ( studentData === null ) ? "" : studentData.fName;
        let mNameValue = ( studentData === null ) ? "" : studentData.mName;
        let lNameValue = ( studentData === null ) ? "" : studentData.lName;
        let ageValue = ( studentData === null ) ? "" : studentData.age;
        //if in receives
        //takes typescript and edits the default values of html form
        this.newRegistrationFormInstance = new ControlGroup({
            'fName': new Control(fNameValue),//control is a method and receives fNameValue paramater; fNameValue is teh value going into form and 'fName' is propert name
            'mName': new Control(mNameValue),// mName has to match nGControl on the html Form. 
            'lName': new Control(lNameValue),//lName does not have to match service - if it doesn't match we have to create a method to transfor variable to match service name'
            'age': new Control(ageValue)

            
        });
    }
    //data is everything sent from form
    //everything in this function happens when we click submit
    //data is object containing the input fields from form
    processRegistrationForm(data: any){
        //added line to put in registration mode
        if(this.formEditStatus==false){
                //NEW REGISTRATION
                //console.log(data);\
                this.studentsRegistrationService.addNewStudent(data);
                //if nothing is in service then don't display anything'
            if ( ! (this.receivedStudentRegistrationCommand.length==0 ) ) {
                    this.isStudentRegistryEmpty= false;
                }  
                //resets the FORM NOT the database/service
                // this. newRegistrationFormInstance = null;
                this.resetForm();
            }

            else {
                //EDITING 
                // this.updateEditedDetails(data);
                //console.log ( data, this.selectedStudentID );
                this.studentsRegistrationService.processEditedStudentInformation(data, this.selectedStudentID);
                this.receivedStudentRegistrationCommand = this.studentsRegistrationService.getAllStudents();  
                this.resetForm();
                this.formEditStatus=false;

            }
        

    }
    
    resetForm(){        
        //for it to be effective we only reset the control property/name alone. not the whole control group
        for(let property in this.newRegistrationFormInstance.controls){
            //checks the property value in ControlGroup.control
            (this.newRegistrationFormInstance.controls[property]).updateValue("");
        }

    }

    //we have to receive only the ID. Nothing is deleted here. we have to specify what is unique about the object to pass to services
    processDeleteBtn(studentId: number):void{
         this.showConfirmationDialog = true;       
         this.selectedStudentID = studentId;


        
        
    }

    editStudentDetails(studentId:number){
        //console.log(studentId);
        let studentCurrentDetails = this.studentsRegistrationService.getSelectedStudentId(studentId);
        this.formEditStatus = true;
        //studentData object containing fname,mdname,lname,age
        //true changes optional paramater to be in edit mode
        // this.createNewFormInstance(true, studentCurrentDetails);
        this.updateFormEditor ( studentCurrentDetails );

    }

    updateFormEditor ( studentCurrentDetails ) {
        // here selectedStudentID is the id of the row that was edited
        this.selectedStudentID = studentCurrentDetails.id;
        this.newRegistrationFormInstance.controls["fName"].updateValue( studentCurrentDetails.fName );
        this.newRegistrationFormInstance.controls["mName"].updateValue( studentCurrentDetails.mName );
        this.newRegistrationFormInstance.controls["lName"].updateValue( studentCurrentDetails.lName );
        this.newRegistrationFormInstance.controls["age"].updateValue( studentCurrentDetails.age );
    }

  

    confirmRestoreDeletedStudent(studentId:number){
        this.showRestoreDialog = true;
        this.selectedStudentID= studentId;
        console.log(studentId);
    }

    btnClickIgnore(){
        this.showRestoreDialog = false;
    }
    btnClickRestoreStudent(selectedStudentID){
        let status = this.studentsRegistrationService.restoreDeleted(selectedStudentID);
        if(status==true){
            this.showRestoreDialog = false;
        }
    }


    // second parameter is optional. it is false by default. if we send in a second paramater it sends actual value - if not show false
    btnClickDeleteConfirmDialogBox( status:boolean, studentId:any = false){

        //first step confirm if user ants to abort operaion of deleting.
        //if status is false then stop deleting and hide dialogue box

        if(status === false){
            //now stop the deleting operaion by hiding the dialoguebox with contains the delete operations.
            
            this.showConfirmationDialog = false; 
            }
        else{
            // console.log ( this.selectedStudentID );
            // since status is true and shows the student ID. we should delete that particular student
            // we now have to communicate with our servocve to update the visibilty property of this particular student

            //acutal deleteing happens when the user clicks yes, not when the user clicks the delete button
            
            let status = this.studentsRegistrationService.deleteStudent(studentId);
            this.showConfirmationDialog = false;
            this.restoreDeletedStudent(status);


            

        }
    }

    restoreDeletedStudent(status){
        
        //first we used this method to call the deleteStudentFunction in services. Services then returns a string back here into the let status variable.
        // let status has received an object with two paramaterms from deleteStudent method in services
        
        
        //status is an object that received serviceReceivedStudentsID and delete staus from service. must use status.serviceReceivedStudentsID for ID value from service
       
        
        this.confirmRestoreDeletedStudent(status.serviceReceivedStudentsID);        

        this.receivedStudentRegistrationCommand = this.studentsRegistrationService.getAllStudents(); 
        if ( ! (this.receivedStudentRegistrationCommand.length===0 ) ) {
            this.isStudentRegistryEmpty= false;
        }  
    }

    


}