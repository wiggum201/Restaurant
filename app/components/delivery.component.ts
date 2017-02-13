import {Component, OnInit} from 'angular2/core';
import {FooterComponent} from '../components/footer.component';
import {HeaderTemplateComponent} from '../components/headerTemplate.component';
import {DeliveryService} from '../services/delivery.service';


@Component({
    //from main.html
    selector: 'delivery-component',
    templateUrl: 'app/templates/delivery.html',
    directives: [FooterComponent, HeaderTemplateComponent],
    providers: [DeliveryService],
    styleUrls: ['app/assets/styles/delivery.css']

    
})

export class DeliveryComponent implements OnInit{
    showHeader: any = false;
    isViewAllBtnClicked=false;
    calc: number = 0;
    pageHeaderVars: any;
    badCode: any = '<button (click)="hackedIt()">click me<button>';
    pageContent:any = {
        introduction: []
    };
    bookDetails:any;
    univeristyPrinceton:any;
    newItem: any = {menu:"Chocolate Cake", price: 4};
    showCartItems: any = false;
    cartItemsSelected: any = [];
    constructor(private deliveryService:DeliveryService){
        this.pageHeaderVars = { img: 'Tomato-Mozz-Basil-Stacks.jpg', thinHeading: 'EAT AT', boldHeading: 'HOME', andSign: false, caption: 'Delivery available Mon-Fri, 10am- 16pm' };
        this.bookDetails = {author:"Mary Shelly", chapters: 20, pages: 250, title: "Frankenstein" };
       this.univeristyPrinceton = {
           numOfDepartments: 50,
           dean:{
                    name: "Michael Smith", age: 58
           },
           departments: [
               {name: "Law", staffNum: 41},
               {name: "History", staffNum: 23}
           ],
           wifiHotspots: [
               "cafeteria", "library"
           ],
       };

    }

    ngOnInit(){
        this.getFoodMenu();
        this.addNewFoodItem();

    }

    hackedIt () {
        alert ( "Hacked!" );
    }

    formatPrice(receivedNum: number, currency = "USD"):any{
        //if(this.isInt(receivedNum)) return receivedNum;
        let formattedPrice = receivedNum.toFixed(2);
        return formattedPrice  + " " + this.currencySymbolConverter(currency);

    }

    currencySymbolConverter(currency: string):any{
        let currencyReferences = {
            "USD": "&#x00024;", "GBP": "&#x000A3;"
        };
        return currencyReferences[currency];

    }

     isInt(n){
        return Number(n) === n && n % 1 === 0;
    }

    isFloat(n){
        return Number(n) === n && n % 1 !== 0;
    }

    btnCheckout(){
        alert("Your cart is empty");
    }

   myQuickCalc( x,y){
       console.log(x,y);
   }
   isScrolling(){
       this.showHeader = true;
       this.calc++;
   }

   clickedViewAll(){
       this.isViewAllBtnClicked = true;
       
   }

   cartItemsLimit( items:any, limit:number = 4):any{
       if (this.isViewAllBtnClicked === true) return items
       
       if (typeof(items) === 'undefined') return;
       //Before limiting, lets group identical items together
       
       var filtered = items.filter(this.filterUniqueItems);
       return filtered.slice(0,limit);
   }
   
   /*
// 1{id:2, name:"sam"},
2{id:2, name:"sam"}, ,<--index
3{id:2, name:"sam"},
4{id:2, name:"sam"},

1{id:2, name:"sam"}, <--- entireNewArrayOfItemsThatRemain.indexOf(currentEntireRow)

*/
   filterUniqueItems(currentEntireRow, index:number, entireNewArrayOfItemsThatRemain){
       
       return entireNewArrayOfItemsThatRemain.indexOf(currentEntireRow) === index;
   }
   

   getFoodMenu(){
       this.deliveryService.getAllDeliveryItems().subscribe(
           response => {
              this.pageContent = response.menu;
           },
           errors => {
               console.log(errors);
           }
       );    

   }

   addNewFoodItem(){
       this.deliveryService.addMenuItem(this.newItem).subscribe(
           response => {
    
           },
           errors => {
               console.log(errors);
           }
       );
   }

   addMenuItemToChart(id:number){
       this.showCartItems = true;
    
       this.deliveryService.addMenuSelectionToPurchaseCart(id).subscribe(
           response => {
               this.cartItemsSelected = response.cartItems;
               console.log(response);
               console.log(this.cartItemsSelected);

           },
           errors => {
               console.log(errors);
           }
       );
   }



}