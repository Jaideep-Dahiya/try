import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CoursesComponent } from './courses/courses.component';
import { ProfileComponent } from './profile/profile.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {path : 'courses' , component : CoursesComponent},
  {path: 'wishlist' , component : WishlistComponent , children: [
    {path : ':id' , component : ProfileComponent}
  ]},
  {path: 'cart' , component : CartComponent},
  {path: 'profile' , component : ProfileComponent},
  {path: '**' ,redirectTo : '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
