import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { AlertifyService } from '../services/alertify.service';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MovieService]
})
export class MoviesComponent implements OnInit{
  title = "Film Listesi";
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];
  filterText: string = "";

  constructor(
    private alertify:AlertifyService,
    private movieService: MovieService
  ){}
  ngOnInit(): void {
    this.movieService.getMovies().subscribe(
      (data) => {
        this.movies = data;
        this.filteredMovies = this.movies;
      });
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
      this.alertify.success(movie.title + " added to list.")
    }else{
      $event.target.classList.remove('btn-danger');
      $event.target.classList.add('btn-primary');
      $event.target.innerText = "Add to List";
      this.alertify.error(movie.title + " removed from list.")
    }
  }
}
