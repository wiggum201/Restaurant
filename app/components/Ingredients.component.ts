import {Component} from 'angular2/core';

@Component({
    //from app/templates/middleSelection.html
    selector: 'ingredients-component',
    templateUrl: 'app/templates/ingredients.html'
})

export class IngredientsComponent{
    ingredients: any;

    constructor(){
        this.ingredients = [
            {id:1, link: "", title: "THE BEST INGREDIENTS", img: "ingredient1.jpg", caption:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},
            {id:2, link: "", title: "RESERVATIONS", img: "ingredient2.jpg", caption:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."}
        ];
    }

}