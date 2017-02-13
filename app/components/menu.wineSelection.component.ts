import {Component} from 'angular2/core';

@Component({
    //from menu.html
    selector: 'wine-selection-component',
    templateUrl: 'app/templates/menu.wineSelection.html',
    styleUrls: ['app/assets/styles/menu.css'],
    inputs: ['menuData']
})

export class MenuWineSelectionComponent{
    menuData:any;

    menuTitleBold: string;
    menuTitleThin: string;
    constructor(){
            this.menuTitleThin = "Wine ";
            this.menuTitleBold = "Selection";            
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