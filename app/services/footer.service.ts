import {OfficeBranchesInterface} from '../interfaces/officeBranches.interface'; 

export class FooterService{
    officeBranches: OfficeBranchesInterface[] = [
        {
            office: 'ENFOLD DETROIT',
            street: '4870 Cass Ave',
            city: 'Detroit, MI, United States',
            phoneNumber: '(555) 389 976',
            email: 'detroid@enfold-restaurant.com' 
        },
        {
            office: 'ENFOLD L.A.',
            street: '1818 N Vermont Ave',
            city: 'Detroit, MI, United States',
            phoneNumber: '(555) 389 976',
            email: 'detroid@enfold-restaurant.com' 
        },
        {
            office: 'ENFOLD SEATTLE',
            street: '4870 Cass Ave',
            city: 'Detroit, MI, United States',
            phoneNumber: '(555) 389 976',
            email: 'detroid@enfold-restaurant.com' 
        },
        {
            office: 'ENFOLD DALLAS',
            street: '4870 Cass Ave',
            city: 'Detroit, MI, United States',
            phoneNumber: '(555) 389 976',
            email: 'detroid@enfold-restaurant.com' 
        }

    ]


    getAllBranches(){
        return this.officeBranches;
    }

    addNewOffice () {
    
    }
}