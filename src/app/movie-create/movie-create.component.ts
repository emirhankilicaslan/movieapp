import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category';
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css'],
  providers: [CategoryService, MovieService, AlertifyService]
})
export class MovieCreateComponent implements OnInit{

  categories: Category[];
  model: any = {
    categoryId: '-1'
  };

  constructor(private categoryService: CategoryService,
              private movieService: MovieService,
              private router: Router,
              private alertify: AlertifyService){}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data=> {
      this.categories = data;
    })
  }

  createMovie(){

    const movie = {
      id: 0,
      title: this.model.title,
      description: this.model.description,
      imageURL: this.model.imageURL,
      isPopular: false,
      datePublished: new Date().getTime(),
      categoryId: this.model.categoryId
    };

    this.movieService.createMovie(movie).subscribe(data=> this.router.navigate(['/movies', data.id]));
  }

  log(value: any){
    console.log(value);
  }
}
