import {Component} from 'angular2/core';
import {FooterService} from '../services/footer.service';

@Component({
    //from main.html, , also from error.html
    selector: 'restaurant-footer',
    templateUrl: 'app/templates/footer.html',
    styleUrls: ['app/assets/styles/footer.css'],
    providers: [FooterService]
})

export class FooterComponent{
    branches: any;

    constructor(footerService: FooterService){
        this.branches = footerService.getAllBranches();
             
    }    

    
}