
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {HTTPRequestsInterface, HTTPPostsInterface} from '../interfaces/httpRequests.interface';
//make service aware of any changes happening. service can receive changes from component/service
import {Injectable} from 'angular2/core';
//keeps observing where makinh http request and more
import {Observable} from 'rxjs/Rx';
//importing map to enable consolitdated server responses to service
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

//inbuilt method to ebable the class to always be alert to receive any changes 
@Injectable()


export class HTTPRequestService{
    studentName: string;
    private apiURL = "http://jsonplaceholder.typicode.com";
    
    //instantiate the http moddule to enable use to perform xhr requests. (xml http request) 
    constructor(private http:Http){

    }

    //<return type>
    //method is always running in background, asynchronus until it server responds
    getAllTodos():Observable <HTTPRequestsInterface>{
        return this.http.get(this.apiURL+"/todos")
        .map(this.extractData)
        .catch(this.handleErrors);
        
        //getAllTodos(map,catch)

    }

    extractData(response: Response):any{
        let data = response.json();
        return data || {};        
    }
    handleErrors(error:any):any{
        return 'error';
    }
}