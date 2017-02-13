import {Component, OnInit, ElementRef} from 'angular2/core';
import 'jQuery';
declare var $:any;

@Component({
    //from app/templates/contacts.html
    selector: 'contact-form-component',
    templateUrl: 'app/templates/contactForm.html'
})

export class ContactFormComponent implements OnInit{
    private el: HTMLElement;
    constructor( private myEl:ElementRef){
        this.el = myEl.nativeElement;
    }
    ngOnInit(){
        //$( this.el.nativeElement ) . find ( '#contact-form' ) . key ( 'Am using jquery' );
    }

    btnProcessForm(){
        let formData = $(this.el).find('#contact-form'). serialize();
        console.log(formData);
    }
}