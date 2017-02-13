//onit - once angular2 is finished with code, then other components can manipulate other function (jquery)
import {Component, ElementRef, OnInit} from 'angular2/core';
import {ChefsService} from '../services/chefs.service';
import {IngredientsComponent} from '../components/ingredients.component';
//exact name from system.config.js. import third party plugin by the exact name defined by system.config.js section
// import "jQuery";
//after importing jQuery, declare '$' so we can use it in component
// declare var $: any;
// import "owlSlider";


import 'jQuery';
//after importing Jquery need to declare a variable to reference jquery
declare var $:any;

import 'owlSlider';


@Component({
    //from bodyMain.html
    selector: 'middle-selection-tag',
    templateUrl: 'app/templates/middleSelection.html',
    directives: [IngredientsComponent],
    providers: [ChefsService]
})



export class MiddleSelectionComponent implements OnInit{
    chefsObject: any;
    constructor(el: ElementRef, chefsService: ChefsService ){
        this.chefsObject = chefsService.getAllChefs();
    }
    //inbuilt method used when we implement OnInit. house all functions that are called/executed after component has been fully rendered
    ngOnInit(){
        //#info because id, '.info' for class,
        //.html to write html data into DOM element 
      
        
 
        //$("#mini-slider-id").owlCarousel(); // use mini-slider-id because those are the elements we want to slide
        $("#mini-slider-id") .owlCarousel({
            autoPlay:true,
            items:1,
            pagination : true,
            startDragging : true,
            transitionStyle: "goDown",
            autoHeight : true,
            slideSpeed : 400,
            }); 

        

    }
    
}
