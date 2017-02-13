import {Component} from 'angular2/core';
import {FooterComponent} from '../components/footer.component';
import {HeaderTemplateComponent} from '../components/headerTemplate.component';

@Component({
    //from app/main.html
    selector: 'restaurant-error',
    
    templateUrl: 'app/templates/error.html',
    directives: [FooterComponent, HeaderTemplateComponent]
})

export class ErrorComponent{
    pageHeaderVars: any;
    constructor(){
        this.pageHeaderVars = { img: 'headerTemplate.jpg', thinHeading: '404 ERROR:', boldHeading: 'Page Not Found', andSign: false, caption: 'Oops, sorry. We could not locate what you are looking for.' }
    }
}