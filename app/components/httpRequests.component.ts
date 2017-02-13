import {Component, OnInit} from 'angular2/core';
import {HTTPRequestService} from '../services/httpRequest.service';
import {HTTPRequestsInterface} from '../interfaces/HTTPRequests.interface';

@Component({
    templateUrl : 'app/templates/httpRequests.html',
    selector: 'httpRequests-component', //from main.html
    providers: [HTTPRequestService]
})

export class HTTPRequestComponent implements OnInit{
    todos:HTTPRequestsInterface;

    constructor(private httpRequestService: HTTPRequestService){

    }

    ngOnInit(){
        this.subscribeAllTodos();
    }

    subscribeAllTodos(){
        this.httpRequestService.getAllTodos()
        .subscribe(
            response => {
                this.todos = response;
                
            },
            
            error => console.log(error)
        );
    }
}







// import {Component, OnInit} from 'angular2/core';
// import {HTTPRequestService} from '../services/httpRequest.service';


// @Component({
//     templateUrl : 'app/templates/httpRequests.html',
//     selector: 'httpRequests-component', //from main.html
//     providers: [HTTPRequestService] 

// })

// export class HTTPRequestComponent implements OnInit{
//     todos: any;


//     constructor(private httpRequestService: HTTPRequestService){
                
//     }

//     ngOnInit(){
//     //application has fully rendered now is the best time to subscribe to todos list. once it is ready we can then receive them
//     this.subscribeAllTodos();
//     }


//     subscribeAllTodos(){
//         this.httpRequestService.getAllTodos()
//         .subscribe( 
//             response => this.todos = response,
//             error => console.log ( error )
//          );
//     }

//     // subscribeAllTodos(){
//     //     this.httpRequestService.getAllTodos()
//     //     .subscribe(
//     //         myReturnedDataFromServer =>  this.todos = myReturnedDataFromServer,
//     //         errorFound => console.log("There was a problem connecting to the server")
//     //     );
//     // }

//     //  .subscribe( 
//     //         //1 callback method: if it was successful, the callback method has response data as its parameter
//     //         function ( myReturnedDataFromServer ) {
//     //             //update todos
//     //             this.todos = myReturnedDataFromServer;
//     //             console.log (myReturnedDataFromServer);
//     //         },

//     //         //2nd callback method is when there was an error encountered. Has a 1st parameter that holds the error
//     //         function ( errorFound ) {
//     //             console.log ( errorFound );
//     //         }
//     //      );


// }