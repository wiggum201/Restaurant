import {Component} from 'angular2/core';

@Component({
    //from slider.html
    selector: 'main-navigation',
    templateUrl: 'app/templates/mainNavigation.html',
    styleUrls: ['app/assets/styles/mainNavigation.css']
})

export class MainNavigationComponent{

navigation: any;
domain: string;
specialLinksObject: any;
socialMediaLinks: any;


constructor(){
this.socialMediaLinks = [
{icon: "facebook" },
{icon: "twitter"},
{icon: "instagram"},
];
this.domain = "http://localhost:3000/";
this.specialLinksObject= [
{title: "Reservation", link: this.domain+"reservation"},
{title:"Login", link: this.domain+"login"}
];    
this.navigation = [
    {title: "Welcome", link: this.domain, active: true},
    {title: "Menu", link: this.domain+"menu"}, 
    {title: "Delivery", link: this.domain+"delivery"},
    {title: "Locations", link: this.domain+"locations"},
    {title: "About", link: this.domain+"about"}, 
    {title: "News", link: this.domain+"news"},   
    {title: "Contacts", link: this.domain+"contacts"}
    
];
     

} 



}