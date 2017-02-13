import {Component} from 'angular2/core';
import {FooterComponent} from '../components/footer.component';
import {HeaderTemplateComponent} from '../components/headerTemplate.component';
import {AboutUsService} from '../services/aboutUs.service';

@Component({
    //from main.html
    selector: 'about-us-component',
    templateUrl: 'app/templates/aboutUs.html',
    directives: [FooterComponent, HeaderTemplateComponent],
    providers: [AboutUsService],
    styleUrls: ['app/assets/styles/aboutUs.css']

})

export class AboutUsComponent{

allPictures:any;

    pageHeaderVars: any;
    constructor(aboutUsService:AboutUsService){
        this.pageHeaderVars = { img: 'aboutUsHeaderTemplate.jpg', thinHeading: 'About Us', boldHeading: 'Photography', andSign: true, caption: 'Take a look at the place, the people and the food…' }
        this.allPictures = aboutUsService.getPictures();

    }



}