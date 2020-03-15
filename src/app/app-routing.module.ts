import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { PostComponent } from './post/post.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: MoviesComponent },
  { path: 'details/:movieId', component: MovieDetailsComponent },
  { path: 'post', component: PostComponent },
  { path: 'shoppingCart', component: ShoppingCartComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
