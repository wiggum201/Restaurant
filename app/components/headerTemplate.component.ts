import {Component} from 'angular2/core';
import {MainNavigationComponent} from '../components/mainNavigation.component';

@Component({
    //from app/main.html, also error.html
    selector: 'restaurant-header',
    //ensure the mainNavigationtemplate tag is in headerTemplate.html
    templateUrl: 'app/templates/headerTemplate.html',
    directives: [MainNavigationComponent],
    inputs: ['headerVars']

})

export class HeaderTemplateComponent{    
    headerVars: any;
    constructor(){
        
    }
}