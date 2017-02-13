import {Component} from 'angular2/core';
import {ControlGroup} from 'angular2/common';
import {Control} from 'angular2/common';
import {OnInit} from 'angular2/core';
import {Validators} from 'angular2/common';
import {ContactsService} from '../services/contacts.service';

@Component({
    //from app/templates/contacts.html
    selector: 'contact-form-component',
    templateUrl: 'app/templates/contactForm.html',
    providers: [ContactsService]
})

export class ContactFormComponent implements OnInit{
    contactUsRequest: any;
    myName: string;
    constructor(contactsService: ContactsService){
        this.myName = "Samson";
    }
    ngOnInit(){
        this.createNewFormInstance ();
    }

    createNewFormInstance ():void {
        this.contactUsRequest = new ControlGroup({
            'visitorName': new Control ('', Validators.compose([
                Validators.required, 
                Validators.minLength(3),
                Validators.maxLength(30)
            ])),
            
            'visitorEmail': new Control('', Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')
            ])),
            'subject': new Control('',Validators.required),
            'date': new Control('',Validators.pattern('^(0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2}$')),
            'quantity': new Control('', Validators.compose([
                Validators.required,
                this.validateOrderQuantity
            ])),
            'visitorMessage': new Control('', Validators.required)

        })
    }
    
    
    //custom validator
        validateOrderQuantity(control:any):any{
            let userQuantity = control.value;
            if ( isNaN ( userQuantity) ) return { 'quantity':true };
            userQuantity = parseInt ( userQuantity );

            if ( userQuantity < 5 || userQuantity > 200  ) return { 'quantity':true };
            
        }





    resetForm (): void {
        this.createNewFormInstance ();
    }


    //submition of form. needed to update database
    processContactPage(myFormData:any){
        console.log(myFormData);
        this.resetForm ();
    }
}
