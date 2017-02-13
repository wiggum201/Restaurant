export interface MenusInterface{
   
        thinTitle: string,
        boldTitle: string,
        startSegment: string,
        component:string,
        menuItems: [
            { menuItemtTitle: string, menuItemCaption: string, menuItemPrice: number }
        ],
        image: any,
        imgSrc: string,
        softDrink:boolean,
        menuOfDay:boolean


}