import {Component} from "angular2/core";

@Component({
    //from menu.html
    selector: 'breakfast-component',
    templateUrl: 'app/templates/menu.breakfast.html',
    styleUrls: ['app/assets/styles/menu.css'],
    inputs: ['menuData']

})

export class MenuBreakfastComponent{

    menuTitleBold: string;
    menuTitleThin: string;
    menuData:any;
    constructor(){
            this.menuTitleThin = "Break";
            this.menuTitleBold = "Fast";    

            console.log ( this.isInt ( 500 ) );        
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
