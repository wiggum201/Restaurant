import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Rx';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";


@Injectable()

export class DeliveryService{
    
    private apiFoodURL: string ="http://localhost:3500/api/menu";
    private headersInfo = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

    private options;

    constructor(private http:Http){

    }


    
    
    getAllDeliveryItems():Observable<any>{
        return this.http.get(this.apiFoodURL + '/view' )
        .map(this.serializeServerData)
        .catch(this.errorHandler);
    }

    getMenu():Observable<any>{
        return this.http.get(this.apiFoodURL)
        .map(this.serializeServerData)
        .catch(this.errorHandler);
    }

    addMenuItem(addMenuItem):Observable<any>{
        var bodyData = JSON.stringify(addMenuItem);
        this.options = new RequestOptions({'headers':this.headersInfo});

        return this.http.put(this.apiFoodURL+'/add', bodyData, this.options)
        .map(this.serializeServerData)
        .catch(this.errorHandler);
    }


    serializeServerData(response:Response):any{
        let data = response.json();
        return data || {};
    }
    errorHandler(error: any):any{
        return "There was an error on the service side.";
    }
    addMenuSelectionToPurchaseCart(id:number):Observable<any>{
        return this.http.get(this.apiFoodURL+'/cart/' +id)
        .map(this.serializeServerData)
        .catch(this.errorHandler);

    }
}