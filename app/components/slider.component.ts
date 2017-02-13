import {Component, OnInit, ElementRef} from 'angular2/core';
import {MainNavigationComponent} from '../components/mainNavigation.component';
import 'jQuery';
declare var $: any;
import 'owlSlider';

@Component({
    //from app/templates/bodyMain.html
    selector: 'restaurant-slider',
    templateUrl: 'app/templates/slider.html',
    styleUrls: ['app/assets/styles/slider.css'],
    directives: [MainNavigationComponent]

})

export class SliderComponent implements OnInit{
    mainSlides: any;
    
    private el: any;
    constructor(elVar: ElementRef){
        this.el = elVar.nativeElement;
        this.mainSlides = [
            {
                id: 1, 
                image: 'slide1.jpg', 
                thinTitle: 'Welcome to',
                 boldTitle: 'ENFOLD RESTAURANT', 
                 description: 'The best gourmet restaurant available in Manhatten Book online or call (555)123-4567'
             },
            {
                id: 2, 
                image: 'slide2.jpg', 
                thinTitle: 'The Best', 
                boldTitle: 'PLACE TO BE', 
                description: 'The best gourmet restaurant available in Manhatten Book online or call (555)123-4567' 
            },
            {
                id: 3, 
                image: 'slide3.jpg', 
                thinTitle: 'Make Reservation', 
                boldTitle: 'AT THE COMFORT OF YOUR HOME', 
                description: 'The best gourmet restaurant available in Manhatten Book online or call (555)123-4567' 
            }
        ];
    }

    ngOnInit(): any {
        //$(this.el).find('#infooo').html('Danny'); for testing
      

        $("#main-slider") .owlCarousel({
            autoPlay:true,
            items:1,
            pagination : true,
            startDragging : true,
            transitionStyle: "fade",
            autoHeight : true,
            slideSpeed : 400,
            afterInit: function () { console.log ( "I have finished loading..." ); }
            }); 
    }
    

    

}