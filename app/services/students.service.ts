import {StudentsInterface} from '../interfaces/students.interface';

export class StudentsService{
    allStudentsList: StudentsInterface[]= [];

    getAllStudents():any{
        return this.allStudentsList;
    }

    addNewStudent ( newStudentObject ):any{
        //Will try to update our database, if it is successful, it return true but if fails, it return false
        this.allStudentsList.push(newStudentObject);
        return true;
    }

}