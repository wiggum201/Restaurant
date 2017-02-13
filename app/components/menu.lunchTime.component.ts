import {Component} from 'angular2/core';

@Component({
    //from menu.html
    selector: 'lunch-time-component',
    templateUrl: 'app/templates/menu.lunchTime.html',
    styleUrls: ['app/assets/styles/menu.css'],
    inputs: ['menuData']
})

export class MenuLunchTimeComponent{
    
    menuTitleBold: string;
    menuTitleThin: string;
    menuData:any;
    constructor(){
            this.menuTitleThin = "Lunch";
            this.menuTitleBold = "time";            
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