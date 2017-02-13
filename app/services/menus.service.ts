import {MenusInterface} from '../interfaces/menus.interface';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Rx';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()

export class MenusService{

private apiMenuURL: string = "http://localhost:3500/api/menu";
private headersInfo = new Headers({'Content-Type':'application/json'});
private options;

constructor(private http:Http){

}

    getallMenus():Observable<any>{
        return this.http.get(this.apiMenuURL+'/view')
        .map(this.serializeServerData)
        .catch(this.errorHandler);
    }



    serializeServerData(response:Response):any{
        let data = response.json();
        return data || {};
    }

    errorHandler(error:any):any{
        return "There was an error on the service side";
    }






    menus:MenusInterface [] = [
        // Breakfast
        {
            thinTitle: "of Day",
            boldTitle: "Menu ",
            startSegment: "bold",
            component:"menu-of-day-component",
            menuItems: [
                {menuItemtTitle: "EGGS BENEDICT", menuItemCaption: "with either bacon or salmon", menuItemPrice: 21},
                {menuItemtTitle: "EGGS BENEDICT", menuItemCaption: "with either bacon or salmon", menuItemPrice: 21},
                {menuItemtTitle: "EGGS BENEDICT", menuItemCaption: "with either bacon or salmon", menuItemPrice: 21},
            ],
            image:true,
            imgSrc:"wine-selection.jpg",
            softDrink:false,
            menuOfDay:true
        },     
        {
            thinTitle: "Break",
            boldTitle: "fast",
            startSegment: "thin",
            component:"breakfast-component", 
            menuItems: [
                {menuItemtTitle: "EGGS BENEDICT", menuItemCaption: "with either bacon or salmon", menuItemPrice: 21},
                {menuItemtTitle: "LOW CARB BREAKFAST", menuItemCaption: "grilled chicken breast with veggies", menuItemPrice: 13},
                {menuItemtTitle: "ENFOLD’S FAMOUS CREPES", menuItemCaption: "with fresh fruit, bacon and maple syrup", menuItemPrice: 16},
                {menuItemtTitle: "BAGEL", menuItemCaption: "with salmon, cream cheese and salsa", menuItemPrice: 8.50},
                {menuItemtTitle: "FRENCH TOASTED BRIOCHE", menuItemCaption: "with grilled banana, bacon, rosewater mascarpone and maple syrup", menuItemPrice: 17},
                {menuItemtTitle: "AMERICAN PANCAKES", menuItemCaption: "with chocolate  sauce or maple syrup, honey and cream", menuItemPrice: 21}
            ],
            image:false,
            imgSrc: "",
            softDrink:false,
            menuOfDay:false
          
        },
        // Lunchtime
        {
            thinTitle: "Lunch",
            boldTitle: "time",
            startSegment: "thin",
            component:"lunch-time-component",
            menuItems: [
                {menuItemtTitle: "SPICED PIGEON", menuItemCaption: "Ale & artichokes", menuItemPrice: 38},
                {menuItemtTitle: "LINEFISH", menuItemCaption: "Pan fried line fish, herbed nicola potato and mussel salad", menuItemPrice: 27},
                {menuItemtTitle: "RIBEYE STEAK", menuItemCaption: "Mushroom ketchup & fries", menuItemPrice: 42},
                {menuItemtTitle: "AUTUMN LAMB", menuItemCaption: "Pan seared lamb loin, slow roasted lamb shanks", menuItemPrice: 33},
                {menuItemtTitle: "DUCK BREAST", menuItemCaption: "Smoked confit fennel & umbles", menuItemPrice: 35},
                {menuItemtTitle: "DUCK", menuItemCaption: "Confit duck leg, mushroom and liver stuffing and onions", menuItemPrice: 75},
                {menuItemtTitle: "ROAST TURBOT", menuItemCaption: "Mussel & seaweed ketchup, salmon roe & sea rosemary", menuItemPrice: 22},
                {menuItemtTitle: "HOMEDRIED TOMATO", menuItemCaption: "with sesame, aubergine puree and burnt aubergine jelly", menuItemPrice: 22}
            ],
            image:false,
            imgSrc: "",
            softDrink:false,
            menuOfDay:false 

        },
        // Wine Selection
        {
            thinTitle: "Wine ", 
            boldTitle: "Selection",
            startSegment: "thin",
            component:"wine-selection-component", 
            menuItems: [
                {menuItemtTitle: "GRECHETTO, POGGIO DELLA COSTA", menuItemCaption: "2011, Umbria, Italy (B) 13|49", menuItemPrice: 23},
                {menuItemtTitle: "MUSKATELLER, HEIDI SCHROCK", menuItemCaption: "2010, Neusiedlersee-Huggeland, Austria (B) 52", menuItemPrice: 45},
                {menuItemtTitle: "POSIP, ZLATAN OTOK WINERY", menuItemCaption: "2012, Island of Hvar, Croatia (B) 53", menuItemPrice: 12},
                {menuItemtTitle: "CHENIN BLANC, NICOLAS JOLY", menuItemCaption: "2010, Loire, France (B) 65", menuItemPrice: 33},
                {menuItemtTitle: "PETITE CHABLIS, F. BACHELIER", menuItemCaption: "2011, Chablis, France (O) 44", menuItemPrice: 32.90},
                {menuItemtTitle: "PROSECCO, JEIO", menuItemCaption: "NV, Italy (O) 11|37", menuItemPrice: 22},
                {menuItemtTitle: "CAVA BRUT, CAMPASSO", menuItemCaption: "NV, Spain (O) 11|41", menuItemPrice: 33}
            ],
              image: true,
              imgSrc: 'wine-selection.jpg',
              softDrink:false,
              menuOfDay:false
              
        },
        // Non Alchoholic Beverages
        {
            thinTitle: "Non Alchoholic", 
            boldTitle: " Beverages",
            startSegment: "thin", 
            component:"soft-drinks-selection-component",
            menuItems: [
                {menuItemtTitle: "7UP", menuItemCaption: "", menuItemPrice: 3.90},
                {menuItemtTitle: "COKE", menuItemCaption: "", menuItemPrice: 3.90},
                {menuItemtTitle: "CRUSH", menuItemCaption: "", menuItemPrice: 2.70},
                {menuItemtTitle: "ROOT BEER", menuItemCaption: "", menuItemPrice: 3.90},
                {menuItemtTitle: "PEPSI", menuItemCaption: "", menuItemPrice: 2.90},
                {menuItemtTitle: "CRYSTAL LIGHT", menuItemCaption: "", menuItemPrice: 5.90},
                {menuItemtTitle: "APPLE JUICE", menuItemCaption: "", menuItemPrice: 3.90},
                {menuItemtTitle: "RED BULL", menuItemCaption: "", menuItemPrice: 4.90},
                {menuItemtTitle: "BANANA SHAKE", menuItemCaption: "", menuItemPrice: 5.90},
                {menuItemtTitle: "ORANGE JUICE", menuItemCaption: "", menuItemPrice: 3.90},
                {menuItemtTitle: "BITTER LEMON", menuItemCaption: "", menuItemPrice: 2.95},
                {menuItemtTitle: "PINEAPPLE SHAKE", menuItemCaption: "", menuItemPrice: 7.95}
            ],
            image:false,
            imgSrc: "",
            softDrink:true,
            menuOfDay:false
        }

    ]


    // getallMenus():any{
    //     return this.menus;
    // }

}