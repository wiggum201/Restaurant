import {Component} from 'angular2/core';

@Component({
    //from menu.html
    selector: 'soft-drinks-selection-component',
    templateUrl: "app/templates/menu.softDrinks.html",
    styleUrls: ['app/assets/styles/menu.css'],
    inputs: ['menuData']

})

export class MenuSoftDrinksComponent{
    menuTitleBold: string;
    menuTitleThin: string;
    menuData:any;
    constructor(){
            this.menuTitleThin = "Non-Alcholic ";
            this.menuTitleBold = "Beverages";            
    }

    formatPrice(receivedNum: number):any{
        if(this.isInt(receivedNum)) return receivedNum;
        return receivedNum.toFixed(2);

    }

     isInt(n){
        return Number(n) === n && n % 1 === 0;
    }

    isFloat(n){
        return Number(n) === n && n % 1 !== 0;
    }

}