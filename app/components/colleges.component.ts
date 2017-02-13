import {Component} from 'angular2/core';
import {CollegesService} from '../services/colleges.service';

@Component({
    //from main.html
    selector: ' colleges-component',
    templateUrl: 'app/templates/colleges.html',
    styleUrls: ['app/assets/styles/colleges.css'],
    providers: [CollegesService]
})

export class CollegesComponent{
    allColleges: any;
    displayFeedbackInfoTrue: boolean;
    displayFeedbackInfoFalse: boolean;

    constructor(private collegesService: CollegesService){
        this.allColleges = collegesService.getColleges();
        this.displayFeedbackInfoTrue = false;
        this.displayFeedbackInfoFalse = false;
    }

    findCollegeInfo(receivedCollegeFormInfo:any){
        let schoolName = receivedCollegeFormInfo.collegeName;
        let schoolNumStudents = receivedCollegeFormInfo.numberStudents;
        let schoolNumDepartments = receivedCollegeFormInfo.numberDepartments;
        let schoolConference = (receivedCollegeFormInfo.isIvyLeagueSchool == 'true' ) ? true : false;
        //{service value: HTML property(value receieved from html through fundction) }
        let schoolObject = {name: schoolName, numStudents: schoolNumStudents, numDepartments: schoolNumDepartments, isIvyLeague: schoolConference};

        let updateStatus = this.collegesService.addNewColleges(schoolObject);

        if(updateStatus){
            this.displayFeedbackInfoTrue = true;

        }
        else{
            this.displayFeedbackInfoFalse = true;

        }


        


         

        //let feedBack = this.collegesService.setColleges(schoolObject);

        //console.log(schoolObject);

        console.log(this.allColleges);

    }

}