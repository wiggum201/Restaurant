import {Component} from 'angular2/core';
import {FooterComponent} from '../components/footer.component';
import {HeaderTemplateComponent} from '../components/headerTemplate.component';
import {MenusService} from '../services/menus.service';
import {MenuOfDayComponent} from '../components/MenuOfDay.component';
import {MenuBreakfastComponent} from '../components/menu.breakfast.component';
import {MenuLunchTimeComponent} from '../components/menu.lunchTime.component';
import {MenuWineSelectionComponent} from '../components/menu.wineSelection.component';
import {MenuSoftDrinksComponent} from '../components/menu.softDrinks.component';

@Component({
    //from main.html
    selector: 'restaurant-menu',
    templateUrl: 'app/templates/menu.html',
    directives: [FooterComponent, HeaderTemplateComponent, MenuOfDayComponent, MenuBreakfastComponent, MenuLunchTimeComponent, MenuWineSelectionComponent, MenuSoftDrinksComponent],
    styleUrls: ['app/assets/styles/menu.css'],
    providers: [MenusService]
})

export class MenuComponent{
    pageHeaderVars: any;
    allMenus: any;
    sam:string="Testing...";
    constructor(menusService:MenusService){
        this.pageHeaderVars = { img: 'headerTemplate2.jpg', thinHeading: 'OUR', boldHeading: 'MENU', andSign: true, caption: 'Everything we have to offer at one glance' }
        this.allMenus = menusService.getallMenus();
    }

    

   
}