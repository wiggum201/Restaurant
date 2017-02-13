import { Component, OnInit } from 'angular2/core';
import {UICalculatorService} from '../services/ui-calculator.service';
import {ControlGroup,Control} from 'angular2/common';


@Component ({
    selector: 'ui-calculator',
    templateUrl: 'app/templates/ui-calcultor.html',
    providers: [UICalculatorService]
})

export class UICalculator implements OnInit {
    //this is service so we can change in increment button
    employees: any;
    selectedId: number;
    formInstance: any;
    
    constructor(private uiCalculatorService: UICalculatorService){
        this.employees = uiCalculatorService.getAllEmployees();
    }
    ngOnInit(){
        this.formInstance = new ControlGroup({
            'fName': new Control (''),
            'mName': new Control (''),
            'lName': new Control ('')
        });
    }
    processForm(formData: any){
        console.log(formData);
        let finishedEditing = this.uiCalculatorService.updateDatabase(formData, this.selectedId);
        if (finishedEditing == true){
            this.resetForm();
        }
    }

    btnClickEdit(passedSelectedId){
        this.selectedId = passedSelectedId;
        console.log (this.selectedId);
        let feedback = this.uiCalculatorService.getEmployeeDetails(passedSelectedId);
        this.distributeEmployeeDetails(feedback);  

    }

    distributeEmployeeDetails(feedback){
        console.log(feedback);

        this.formInstance.controls["fName"].updateValue( feedback.fName );
        this.formInstance.controls["mName"].updateValue( feedback.mName );
        this.formInstance.controls["lName"].updateValue( feedback.lName );
    }

    resetForm(){
        //for it to be effective we only reset the control property/name alone. not the whole control group
        for(let property in this.formInstance.controls){
            //checks the property value in ControlGroup.control
            (this.formInstance.controls[property]).updateValue("");
        }
    }

} 