import {Component} from 'angular2/core';
import {FooterComponent} from '../components/footer.component';
import {MainNavigationComponent} from '../components/mainNavigation.component';
import {BodyMainComponent} from '../components/bodyMain.component';




@Component({
    //from main.html
    selector:'restauarant-home-page',
    templateUrl: 'app/templates/homePage.html',
    directives: [FooterComponent, MainNavigationComponent, BodyMainComponent]
})

export class HomePageComponent{

}