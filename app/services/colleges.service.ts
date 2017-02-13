import {CollegesInterface} from '../interfaces/colleges.interface';

export class CollegesService{
    collegesList: CollegesInterface[] =[];

    getColleges():any{
        return this.collegesList;
    }

    addNewColleges(newCollegeObject:any):boolean{
        this.collegesList.push(newCollegeObject);
        return true;
    }
}

/*
    collegesList: any = [              
        {name: 'MIT', numStudents: 11000, numDepartments: 31, isIvyLeague: false},        
        {name: 'Princeton', numStudents: 8000, numDepartments: 47, isIvyLeague: true},        
        {name: 'Stanford', numStudents: 16000, numDepartments: 72, isIvyLeague:false},
        {name: 'Harvard', numStudents: 21000, numDepartments: 40, isIvyLeague:true},
    ]

*/