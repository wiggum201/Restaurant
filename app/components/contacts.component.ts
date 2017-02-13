import {Component} from 'angular2/core';
import {FooterComponent} from '../components/footer.component';
import {HeaderTemplateComponent} from '../components/headerTemplate.component';
import {ContactFormComponent} from '../components/contactForm.component';

@Component({
    //from main.html
    selector: 'contacts-component',
    templateUrl: 'app/templates/contacts.html',
    directives: [FooterComponent, HeaderTemplateComponent, ContactFormComponent],
    inputs: ['headerVars']

})

export class ContactsComponent{
    pageHeaderVars: any;
    constructor(){
        this.pageHeaderVars = { img: 'headerTemplate2.jpg', thinHeading: 'Contact Us', boldHeading: 'For More Information', andSign: true, caption: 'Reach out to use for more information…' }

}


    

}