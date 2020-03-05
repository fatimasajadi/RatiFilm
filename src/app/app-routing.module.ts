import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { PostComponent } from './post/post.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: MoviesComponent },
  { path: 'details/:movie.id', component: MovieDetailsComponent },
  { path: 'post', component: PostComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
