import { Component, OnInit, EventEmitter } from '@angular/core';
import { CourseWishlistService } from '../course-wishlist.service';
import { coursedata } from '../courses/courses.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cw : CourseWishlistService) { }
  cartlist:coursedata[] = this.cw.getcart();
  holdemit:coursedata[] = [];
  delset = new Set<string>();
  ngOnInit(): void {
    this.cw.$newadded.subscribe((data) => {
      this.cartlist = this.cw.getcart();
      console.log(this.cartlist);
    })
  }


  deleteme(x : string){
    console.log("deleting "+x);
    this.cw.deletefromcart(x);
  }

}
