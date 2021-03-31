import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError  } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor( private http: HttpClient ) { }

    appConfig = {
        apiUrl      : 'https://dvt-deezer-anele.herokuapp.com/',
        headers     : new HttpHeaders({
            'Content-Type' : 'application/json',
            'X-Requested-With' 	: 'XMLHttpRequest',
            'Access-Control-Allow-Origin'	: '*',
            'Access-Control-Allow-Headers'	: '*',
        })
    };


    private catchError( error: HttpErrorResponse | any ) {
        return throwError( error   || "Server Error")
    }


    private extractData (resp : HttpResponse<any>) {
        return resp;
    }

    getData(verb: string ): Observable<any> {
        return this.http.get(this.appConfig.apiUrl + verb , {headers : this.appConfig.headers})
            .pipe(
                catchError(err => {
                    return this.catchError(err);
                }),
                map(
                    (response: any) => {
                        return this.extractData(response);
                    }
                )
            );
    }


    postData(verb: string, data: any ): Observable<any> {
        return this.http.post( this.appConfig.apiUrl + verb, data, {headers : this.appConfig.headers});
    }

}
