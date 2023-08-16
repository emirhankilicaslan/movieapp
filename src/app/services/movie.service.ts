import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, delay, map, tap } from "rxjs/operators";
import { Movie } from "../models/movie";

@Injectable()
export class MovieService{

    url = "http://localhost:3000/movies";
    url_firebase = "https://angular-movie-app-56f8d-default-rtdb.firebaseio.com/";

    constructor(private http: HttpClient){}

    getMovies(categoryId: number): Observable<Movie[]>{

        return this.http.get<Movie[]>(this.url_firebase + "movies.json")
        .pipe(
            map(response=> {
                const movies: Movie[] = [];
                for (const key in response){
                    if(categoryId){
                        if(categoryId === response[key].categoryId){
                            movies.push({...response[key], id: key});
                        }
                    }else{
                        movies.push({...response[key], id: key});
                    }
                }
                return movies;
            }),
            tap(data => console.log(data)),
            catchError(this.handleError),
        );
    }

    createMovie(movie: Movie): Observable<Movie>{

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':'application/json',
                'Authorization':'Token'
            })
        }

        return this.http.post<Movie>(this.url_firebase + "movies.json", movie, httpOptions).pipe(
            tap(data => console.log(data)),
            catchError(this.handleError)
        );
    }

    getMoviesById(movieId: string): Observable<Movie>{
        return this.http.get<Movie>(this.url_firebase +  "movies/" + movieId + ".json").pipe(
            tap(data => console.log(data)),
            catchError(this.handleError),
        );
    }

    private handleError(error: HttpErrorResponse){
        return throwError(() => new Error('Bir hata olustu.'));
    }
}