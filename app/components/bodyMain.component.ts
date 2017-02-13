import {Component} from 'angular2/core';
import {SliderComponent} from '../components/slider.component';
import {MiddleSelectionComponent} from '../components/middleSelection.component';

@Component({
    //from main.html
    selector: 'restaurant-main-body',
    templateUrl: 'app/templates/bodyMain.html',
    directives: [SliderComponent, MiddleSelectionComponent]
   

})

export class BodyMainComponent{

}