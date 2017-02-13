import {Component} from 'angular2/core';
//control group allows us to manipulate the whole form
import {ControlGroup} from 'angular2/common';
//control enables us to manipulate text inputs, text areas. controls individual aspects of form
import {Control} from 'angular2/common';
import {OnInit} from 'angular2/core';
//this module gives the ability to validate inputs from the form. can be extended by create own custom validations rules/methods
import {Validators} from 'angular2/common'; 


@Component({
    //from modelDrivenForm.html
    selector: 'model-driven-child-component',
    templateUrl: 'app/templates/modelDrivenFormChild.html',
    



})

export class ModelDrivenFormChildComponent implements OnInit {
    registration: any;
    studentRegistrationForm: any;

   constructor(){
       
   }

   ngOnInit(){
       this.registration = new ControlGroup({
           //'has to match html values'
           'name': new Control('', Validators.compose([
               Validators.required, 
               Validators.minLength(3),
               Validators.maxLength(25)
           ])),
           'email': new Control('', Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')),
           'age': new Control('', this.restrictAge )
       });



       //Student registration
       this.studentRegistrationForm = new ControlGroup({
           //has to match html form
           'fName': new Control('', Validators.compose([
               Validators.required,
               Validators.minLength(3),
               Validators.pattern('^[a-zA-Z]+$')
           ])),
           'lName': new Control('', Validators.compose([
               Validators.required,
               Validators.minLength(3),
               Validators.pattern('^[a-zA-Z]+$')
           ])),
           'major': new Control(''),
           'age': new Control('', this.controlAge),
           'bio': new Control('', Validators.compose([
               Validators.required,
               Validators.pattern('^[a-zA-Z0-9]+$')
           ]))
       });

   }

   processRegistrationForm(data: any){
       console.log(data);
   }
   submitStudentRegistrationForm(data:any){
       console.log(data);
   }
   
   restrictAge(control):any{
       let age = control.value;
      //Ensure the age is provided. is a must
      if(age.trim().length===0)return{age:true}; 
      //ensure it is a number
      return null;
   }

    controlAge(control:any):any{
        let receivedAge = control.value;
        if(receivedAge.trim()<0)return{receivedAge:true}
    }
   

}