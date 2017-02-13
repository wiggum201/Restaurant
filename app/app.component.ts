import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {ErrorComponent} from './components/error.component';
import {HomePageComponent} from './components/homePage.component';
import {AboutUsComponent} from './components/aboutUs.component';
import {ContactsComponent} from './components/contacts.component';
import {MenuComponent} from './components/menu.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form.component';
import {CollegesComponent} from './components/colleges.component';
import {ModelDrivenFormComponent} from './components/modelDrivenForm.component';
import {ReservationComponent} from './components/reservation.component';
import {EditFormPracticeComponent} from './components/EditFormPractice.component';
import {DeliveryComponent} from './components/delivery.component';
import {LocationsComponent} from './components/locations.component';
import {APIConnectionComponent} from './components/apiConnection.component';
import {StudentRegistrationComponent} from './components/students-registration.component';
import {HTTPRequestComponent} from './components/httpRequests.component';



@RouteConfig([
    {path: '/', component: HomePageComponent},
    {path: '/about', component: AboutUsComponent},
    {path: '/contacts', component: ContactsComponent},
    {path: '/template-driven-form', component: TemplateDrivenFormComponent },
    {path: '/colleges', component: CollegesComponent},
    {path: '/model-driven-form', component: ModelDrivenFormComponent},
    {path: '/menu', component: MenuComponent},
    {path: '/delivery', component: DeliveryComponent},
    {path: '/api-connection', component: APIConnectionComponent},
    {path: '/httpRequests', component: HTTPRequestComponent},
    {path: '/locations', component: LocationsComponent},
    {path: '/reservation', component: ReservationComponent},
    {path: '/edit-form-practice', component: EditFormPracticeComponent},
    {path: '/students-registration', component: StudentRegistrationComponent},
    {path: '/**', component: ErrorComponent}
    

])


@Component({
    //from index.html -> system.config.js
    selector: 'app',
    templateUrl: 'app/main.html',
    directives: [ROUTER_DIRECTIVES]
})

export class AppComponent{

}