import { Movie } from "./movie";

export class MovieRepository{
    private movies: Movie[];

    constructor(){
        this.movies = [
            {id: 1, title: "Oppenheimer", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ratione aliquid beatae officiis, amet odit atque ipsam cumque modi suscipit magnam maiores illum rerum corrupti ut praesentium dolor doloribus quisquam.", imageURL: "Oppenheimer.jpg", isPopular: true, datePublished: new Date(2023, 1, 5)},
            {id: 2, title: "Barbie", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ratione aliquid beatae officiis, amet odit atque ipsam cumque modi suscipit magnam maiores illum rerum corrupti ut praesentium dolor doloribus quisquam.", imageURL: "Barbie.jpg", isPopular: true, datePublished: new Date(2023, 1, 5)},
            {id: 3, title: "Hızlı ve Öfkeli 9", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ratione aliquid beatae officiis, amet odit atque ipsam cumque modi suscipit magnam maiores illum rerum corrupti ut praesentium dolor doloribus quisquam.", imageURL: "HizliveOfkeli.jpeg", isPopular: false, datePublished: new Date(2023, 1, 5)},
            {id: 4, title: "IT Chapter 2", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus tempora dolores reprehenderit nisi minima, et nam deleniti facilis amet impedit, veniam possimus, cupiditate illo accusantium ad assumenda. Facere numquam illo nesciunt animi, explicabo architecto eaque dolor cupiditate molestias, vitae dolores.            ", imageURL: "it.webp", isPopular: false, datePublished: new Date(2023, 1, 5)}
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