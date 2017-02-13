import {Component} from 'angular2/core';

@Component({
    selector: 'menu-of-day-component',
    templateUrl: 'app/templates/menuOfDay.html',
    styleUrls: ['app/assets/styles/menu.css'],
    inputs:["menuData"]
})

export class MenuOfDayComponent{
    menuData: any;
    constructor(){
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