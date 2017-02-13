import {ChefsInterface} from '../interfaces/chefs.interface';

export class ChefsService{
    allRestaurantChefs: ChefsInterface[] = [
        {
            id: 1, 
            firstName: 'Marcus', 
            lastName: 'Cole', 
            position: 'GRILL CHEF', 
            bio: 'Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
        },
        {   
            id: 2, 
            firstName: 'Lisa',
            lastName: 'Cole',
            position: 'EXECUTIVE CHEF',
            bio: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'
        },
        {   
            id: 3, 
            firstName: 'Lara', 
            lastName: 'Langford', 
            position: 'CHEF DE CUISINE', 
            bio: 'Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris.'
        },
        {   
            id: 4, 
            firstName: 'Alex', 
            lastName: 'Deer', 
            position: 'SOUS CHEF', 
            bio: 'Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui.'
        }
    ];

    //Ggeett all chefs 
    getAllChefs(){
        return this.allRestaurantChefs;
    }
}