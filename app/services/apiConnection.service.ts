// why Response is not in the constructor
//why headers not in construcor
//what is headers
//why handleErrors() takes in a paramater
// where get application/x-www-form-urlencoded from
//return this.http.post(this.apiURL+'/bookings/book', data, options)
//connection between componennt and server
//explain response in console log on browser


//construcor - inititalzes default values to various variables


import {APIConnectionInterface, APIPostsInterface} from '../interfaces/APIConnection.interface';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {HTTPRequestsInterface} from '../interfaces/httpRequests.interface';
//make service aware of any changes happening. service can receive changes from component/service
import {Injectable} from 'angular2/core';
//keeps observing where makinh http request and more
import {Observable} from 'rxjs/Rx';
//importing map to enable consolitdated server responses to service
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";




@Injectable()


export class APIConnectionService{

    private apiURL:string = 'https://cogmers.or.ke/danny-api/v2';
    private apiURL2:string = 'http://jsonplaceholder.typicode.com';
    private bookings: any;
    private headers;
    private options;

    constructor(private http: Http){

    } 

    getAllBookings():Observable <HTTPRequestsInterface>{
        return this.http.get(this.apiURL+"/bookings/view")
        .map(this.serializeServerData)
        .catch(this.handleErrors);
    }

    serializeServerData(myServerResponse:Response){
        let data = myServerResponse.json(); // We are receiving data from server then we convert it to json object. Just case in case the server might give us unexpected data format.
        this.bookings = data;
        return data || {};
    }

    handleErrors( error: any):any{
        return "Errors";
    }



    addNewReservation(receivedData:any):any{
        //When sending data, confirm what API expects. The server is anticipating json in form of  string
        //Lets convert our receivedData object to json string
        let data = 'id=' + receivedData.id + '&date='+receivedData.date + '&name=' + receivedData.name + '&room=' + receivedData.room + '&visibility='+receivedData.visibility;
        // let data = JSON.stringify({
        //     id: receivedData.id,
        //     date: receivedData.date, 
        //     name: receivedData.name, 
        //     room: receivedData.room
        // });
        let myHeaders = new Headers({"Content-type":"application/x-www-form-urlencoded"});
        //let myHeaders = new Headers({"Content-type":"application/json"});
        let options = new RequestOptions({headers: myHeaders });// headers is an object in RequestOptions
        return this.http.post(this.apiURL+'/bookings/book', data, options)//give  the string data to server using the options we declared
        .map(this.serializeServerData)
        .catch(this.handleErrors);

    }

    getAllPosts():Observable <APIPostsInterface>{
        return this.http.get(this.apiURL2+"/posts")
        .map(this.serializeServerData)
        .catch(this.handleErrors);

    }

    deletePostFromDatabase(receivedPostId:number):any{
        return this.http.delete(this.apiURL2+'/posts/'+receivedPostId)
        .map(this.serializeServerData)
        .catch(this.handleErrors);
    }

    deleteBooking(id:number):Observable <APIConnectionInterface>{
        let myHeaders = new Headers({"Content-type":"application/x-www-form-urlencoded"});
        let options = new RequestOptions({headers: myHeaders });
        return this.http.post(this.apiURL+'/bookings/delete/'+id, null, options)
        .map(this.serializeServerData)
        .catch(this.handleErrors);
    }

    editedNewSavedBookingData(data:any):Observable <APIConnectionInterface>{
        let body = 'date='+data.date+'&name='+data.name+'&room='+data.room;
        let myHeaders = new Headers({"Content-type":"application/x-www-form-urlencoded"});
        let options = new RequestOptions({headers: myHeaders});
        //http://cogmers.or.ke/danny-api/bookings/edit/$id
        return this.http.post(this.apiURL+'/bookings/edit/'+data.id, body, options)
        .map(this.serializeServerData)
        .catch(this.handleErrors);


    }

}

