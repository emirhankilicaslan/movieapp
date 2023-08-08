import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryComponent } from './category/category.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movies/movie/movie.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { FooterComponent } from './footer/footer.component';
import { SummaryPipe } from './pipes/summary.pipe';
import { FormsModule } from '@angular/forms';
import { MovieFilterPipe } from './pipes/movie-filter.pipe';
import { AlertifyService } from './services/alertify.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [     // component
    AppComponent,
    NavbarComponent,
    CategoryComponent,
    MoviesComponent,
    MovieComponent,
    MoviesDetailsComponent,
    FooterComponent,
    SummaryPipe,
    MovieFilterPipe
  ],
  imports: [         // module
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AlertifyService
  ],     // services
  bootstrap: [AppComponent]  // starter component
})
export class AppModule { }
