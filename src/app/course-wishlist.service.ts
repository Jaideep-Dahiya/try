import { EventEmitter, Injectable } from '@angular/core';
import { coursedata } from './courses/courses.component';

@Injectable({
  providedIn: 'root'
})
export class CourseWishlistService {
  ans:Record<string,string|boolean|number>[] = [];
  inthecart:Record<string,string|boolean|number>[] = [];
  $newadded = new EventEmitter();
  $price = new EventEmitter();
  constructor() { }
  public mycourses = [
    {id : "1" ,name : "Responsive design course XYZ", wish : true ,price : 1000 , author : "Max"  ,discount : true,disc_amt : 10},
    {id : "2" ,name : "Responsive design course XYZ", wish : true ,price : 1000, author : "Andrew",discount : false,disc_amt : 0},
    {id : "3" ,name : "Responsive design course XYZ", wish : false,price : 1000, author : "Max"   ,discount : false,disc_amt : 0},
    {id : "4" ,name : "Responsive design course XYZ",wish : false,price : 1000, author : "Andrew" ,discount : false,disc_amt : 0},
    {id : "5" ,name : "Responsive design course XYZ",wish : false,price : 1000, author : "Max"  ,discount : true,disc_amt : 30},
    {id : "6" ,name : "Responsive design course XYZ",wish : false,price : 1000, author : "Max" ,discount : false,disc_amt : 0},
    {id : "7" ,name : "Responsive design course XYZ",wish : false,price : 1000, author : "Max",discount : false,disc_amt : 0},
    {id : "8" ,name : "Responsive design course XYZ",wish : false,price : 1000, author : "Andrew",discount : false,disc_amt : 0},
    {id : "9" ,name : "Responsive design course XYZ",wish : false,price : 1000, author : "Max",discount : false,disc_amt : 0},
    {id : "10" ,name : "Responsive design course XYZ",wish : false,price : 1000, author : "Max",discount : false,disc_amt : 0},
    {id : "11" ,name : "Responsive design course XYZ",wish : false,price : 1000, author : "Max",discount : false,disc_amt : 0},
    {id : "12" ,name : "Responsive design course XYZ",wish : false,price : 1000, author : "Max",discount : false,disc_amt : 0},
    {id : "13" ,name : "Responsive design course XYZ",wish : false,price : 1000, author : "Max",discount : false,disc_amt : 0},
    {id : "14" ,name : "Responsive design course XYZ",wish : false,price : 1000, author : "Andrew",discount : false,disc_amt : 0},
    {id : "15" ,name : "Responsive design course XYZ",wish : false,price : 1000, author : "Andrew",discount : false,disc_amt : 0}
  ]
  tothecart:coursedata = {
    id : "",
    name : "",
    wish : true,
    price : 1,
    author : "",
    discount : true,
    disc_amt : 1
  };

  contains:string[] = []
  public getWishes(){
    this.ans = [];
    for(var x of this.mycourses){
      if(x.wish == true)
        this.ans.push(x);
    }
    return this.ans;
  }

  emittingprice(){
    let total:number = 0;
    let x:any;
    for(x in this.cartarray){
        if(x.discount == true){
            total+=x.price - (0.01*x.discount*x.price);
        }else{
          total+=x.price;
        }
    }
    this.$price.emit(x);
    // this.checkoutprice(total);
  }

  public getCourses(){
    return this.mycourses;
  }

  public checkoutprice(x: number){
    this.$price.emit(x);
  }

  cartarray:coursedata[] = [];

  public addtocart(curr : string | boolean | number){
      let temp:coursedata = {
        id : "",
        name : "",
        wish : true,
        price : 1,
        author : "",
        discount : true,
        disc_amt : 1}
      let added:boolean = false;
      for(var x of this.mycourses){
        if(x.id == curr){
          temp = x;
        }
      }
      for(var x of this.cartarray){
        if(x.id == curr){
          added = true;
          break;
        }
      }
      // console.log(this.cartarray);
      if(added!=true){
        this.cartarray.push(temp);
      }
      this.emittingprice();
      this.$newadded.emit();

      // this.$newadded.emit(this.inthecart);
  }
  public getcart(){
    return this.cartarray;
  }

  public togglewish(x : string | boolean | number){
    for(var course of this.mycourses){
      if(course.id == x){
        course.wish = !course.wish;
        break;
      }
    }
  }

  public deletefromcart(x:string){
    for(var num = 0;num<this.cartarray.length;num++){
        if(this.cartarray[num].id == x){
          let temp:coursedata[] = this.cartarray.slice(0,num);
          let temp2:coursedata[] = this.cartarray.slice(num+1);
          let final:coursedata[] = temp.concat(temp2);
          this.cartarray = final;
          console.log(this.cartarray);
        }
      }
      this.$newadded.emit();
  }
}
