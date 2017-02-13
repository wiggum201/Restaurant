import {UICalculatorInterface} from '../interfaces/ui-calculator.interface';

export class UICalculatorService{
    employees: UICalculatorInterface[] = [
        { id: 23, fName: "Samson", mName: "Joel", lName: "Richard", visibility: true },
        { id: 25, fName: "Dan", mName: "Joel", lName: "Richard", visibility: true }
    ];

    getAllEmployees (): any {
        return this.employees
    }

    getEmployeeDetails(passedSelectedID):any{
        //called a repative function to get row index
        let rowIndex = this.userIdToRowNumber( this.employees, passedSelectedID);
        return this.employees[rowIndex];
    }

    updateDatabase(formData, receivedID){
        let rowIndex = this.userIdToRowNumber( this.employees, receivedID);

        formData['id']= receivedID;
        formData['visibility'] = true;
        //splicing deltes and updates entire row
         this.employees.splice(rowIndex,1,formData);
         return true;

    }

    userIdToRowNumber(object, receivedID):any{
        let rowIndex:number;
        object.forEach(function(rowDetails, rowNumber){
            if(('id' in rowDetails) && (receivedID===rowDetails.id)){
                rowIndex=rowNumber;
            }
            
        });
        if(typeof(rowIndex)==='undefined'){
            return false;
        }
        else{
            return rowIndex;
        }        
    }

}