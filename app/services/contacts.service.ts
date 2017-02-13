

export class ContactsService{
    contactList: Object = [
        {id: 1, name: 'Sarah', age: 15},
        {id: 2, name: 'Chris', age: 17},
        {id: 3, name: 'Lisa', age: 18},
        {id: 4, name: 'Nick', age: 16}

    ];
    //:any, do I need to return anything?
    getContact():any{
        return this.contactList;
    }


    deleteContact(selectedId:number):any{
        let allContacts = this.getContact();
        let selectedRow: number;

        allContacts.forEach(function(item,rowNumIndex){
            if("id" in item && (item["id"]===selectedId)){
                selectedRow=rowNumIndex;
        }

    });
    if(typeof (selectedRow)=="undefined"){
        return "your item could NOT be found";
    }
    else{
        allContacts.splice(selectedRow,1);
        this.contactList=allContacts;
        return this.contactList;


    }


    // addNewContact(newContactObject:any){
    //     this.contactList.push(newContactObject)
        // this.collegesList.push(newCollegeObject);
        // return true;
    }
}

