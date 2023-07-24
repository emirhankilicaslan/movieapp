import { Movie } from "./movie";

export class MovieRepository{
    private movies: Movie[];

    constructor(){
        this.movies = [
            {id: 1, title: "Oppenheimer", description: "lorem10", imageURL: "Oppenheimer.jpg", isPopular: true},
            {id: 2, title: "Barbie", description: "lorem10", imageURL: "Barbie.jpg", isPopular: true},
            {id: 3, title: "Hızlı ve Öfkeli 9", description: "lorem10", imageURL: "HizliveOfkeli.jpeg", isPopular: false},
            {id: 4, title: "IT Chapter 2", description: "lorem10", imageURL: "it.webp", isPopular: false}
        ]
    }

    getMovies(): Movie[]{
        return this.movies;
    }

    getPopularMovies(): Movie[]{
        return this.movies.filter(i=>i.isPopular);
    } 

    getMovieByID(id:number): Movie{
        return this.movies.find(i=>i.id==id);
    }

}