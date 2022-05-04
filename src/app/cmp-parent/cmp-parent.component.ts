import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cmp-parent',
  templateUrl: './cmp-parent.component.html',
  styleUrls: ['./cmp-parent.component.scss']
})
export class CmpParentComponent implements OnInit {

   currentRoute : string = "";
   html : string = "";

  constructor(private router : Router, private activatedRoute : ActivatedRoute) {

    console.log("constructor called");

   }

  ngOnInit(): void {
    this.currentRoute = "";
    this.currentRoute = window.location.href;
    this.initRoute();
    
  }

  initRoute(){
    if (this.currentRoute.includes("thumb-view")){
      this.html = "<cmp-child1></cmp-child1>";
    }
    else{
      this.html = "<cmp-child2></cmp-child2>";
    }
  }

  insertA(){
    this.currentRoute = "thumb-view";
    this.router.navigate(["library/thumb-view"]);
    this.initRoute();
   
  }

  insertB(){
    this.currentRoute = "detail-view";
    this.router.navigate(["library/detail-view"]);
    this.initRoute();
  }

}
