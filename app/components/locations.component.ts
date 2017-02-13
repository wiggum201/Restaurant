import {Component} from 'angular2/core';
import {FooterComponent} from '../components/footer.component';
import {HeaderTemplateComponent} from '../components/headerTemplate.component';

@Component({
    //from main.html
    selector: 'locations-component',
    templateUrl: 'app/templates/locations.html',
    directives: [FooterComponent, HeaderTemplateComponent]
})

export class LocationsComponent{
    pageHeadersVars:any;

    constructor(){
        this.pageHeadersVars = { img: 'aboutUs5.jpg', thinHeading: 'OUR', boldHeading: 'MENU', andSign: true, caption: 'Everything we have to offer at one glance' };
    }
}