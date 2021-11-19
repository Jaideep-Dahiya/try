import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { NgxPaginationModule } from 'ngx-pagination';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CourseWishlistService } from './course-wishlist.service';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { CoursedetailComponent } from './coursedetail/coursedetail.component';
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    WishlistComponent,
    CartComponent,
    ProfileComponent,
    CoursedetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [CourseWishlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
