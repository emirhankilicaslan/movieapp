import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { Movie } from "../models/movie";

@Injectable()
export class MovieService{

    url = "http://localhost:3000/movies";

    constructor(private http: HttpClient){}

    getMovies(categoryId: number): Observable<Movie[]>{

        let newUrl = this.url;

        if(categoryId){
            newUrl += "?categoryId=" + categoryId; 
        }

        return this.http.get<Movie[]>(newUrl)
        .pipe(
            tap(data => console.log(data)),
            catchError(this.handleError)
        );
    }

    getMoviesById(movieId: number): Observable<Movie>{
        return this.http.get<Movie>(this.url +  "/" + movieId).pipe(
            tap(data => console.log(data)),
            catchError(this.handleError)
        );
    }

    private handleError(error: HttpErrorResponse){
        return throwError(() => new Error('Bir hata olustu.'));
    }
}