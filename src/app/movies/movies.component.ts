import { Component } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieRepository } from '../models/movie.repository';

declare let alertify: any;

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  title = "Film Listesi";
  movies: Movie[];
  filteredMovies: Movie[];
  movieRepository: MovieRepository;

  filterText: string = "";

  constructor(){
    this.movieRepository = new MovieRepository();
    this.movies = this.movieRepository.getMovies();
    this.filteredMovies = this.movies;
  }

  onInputChanged(){
    this.filteredMovies = this.filterText ? 
    this.movies.filter(m => m.title.indexOf(this.filterText) !== -1 || 
    m.description.indexOf(this.filterText) !== -1) :
    this.movies
  }

  addToList($event: any, movie: Movie){
    if($event.target.classList.contains('btn-primary')){
      $event.target.classList.remove('btn-primary');
      $event.target.classList.add('btn-danger');
      $event.target.innerText = "Remove from List";
      alertify.success(movie.title + " added to list.")
    }else{
      $event.target.classList.remove('btn-danger');
      $event.target.classList.add('btn-primary');
      $event.target.innerText = "Add to List";
      alertify.error(movie.title + " removed from list.")
    }
  }
}
