//control group allows us to manipulate indicidual sections of form

import {Component} from 'angular2/core';
import {FooterComponent} from '../components/footer.component';
import {HeaderTemplateComponent} from '../components/headerTemplate.component';
import {ModelDrivenFormChildComponent} from '../components/modelDrivenFormChild.component';

@Component({
    //from main.html
    selector: 'model-driven-component',
    templateUrl: 'app/templates/modelDrivenForm.html',
    directives: [FooterComponent, HeaderTemplateComponent, ModelDrivenFormChildComponent]
})

export class ModelDrivenFormComponent{
    pageHeaderVars: any;
    constructor(){
        this.pageHeaderVars = { img: 'headerTemplate2.jpg', thinHeading: 'Contact Us', boldHeading: 'For More Information', andSign: true, caption: 'Reach out to use for more information…' }

}

}