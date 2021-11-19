import { Component, OnInit } from '@angular/core';
import { CourseWishlistService } from '../course-wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  p: number = 1;
  public wishlist:Record<string,string | boolean | number>[] = [];
  constructor(private cw : CourseWishlistService) { }
  total = this.wishlist.length;
collection: any[] = this.wishlist;
  ngOnInit(): void {
    this.wishlist = this.cw.getWishes();
  }
}
