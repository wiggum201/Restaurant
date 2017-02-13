import { Component } from 'angular2/core';
import {FooterComponent} from '../components/footer.component';
import {HeaderTemplateComponent} from '../components/headerTemplate.component';
import {StudentsService} from '../services/students.service';

@Component ({
    selector: 'template-driven-component',
    templateUrl: 'app/templates/template-driven-form.html',
    directives: [FooterComponent, HeaderTemplateComponent],
    providers: [StudentsService]
})

export class TemplateDrivenFormComponent {
     pageHeaderVars: any;
     allStudents: any;


    constructor(private studentsService: StudentsService){
        this.pageHeaderVars = { img: 'headerTemplate.jpg', thinHeading: 'Template Driven:', boldHeading: 'Contact Form', andSign: false, caption: 'Oops, sorry. We could not locate what you are looking for.' }
        this.allStudents = studentsService.getAllStudents();
    }


    btnSendForm(receivedFormData: any){
        let studentName = receivedFormData.visitorName;
        let studentAge = receivedFormData.visitorAge;
        let newStudent = { name: studentName, age: studentAge };

        let feedback = this.studentsService.addNewStudent(newStudent);
        if(feedback==true){
            //alert ("Student updated.");
        }
        else {
            //alert ( 'Sorry, we could not update the new record.' );
        }
    
        
    }
}