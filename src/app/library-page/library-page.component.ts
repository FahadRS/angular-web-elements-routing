import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library-page',
  templateUrl: './library-page.component.html',
  styleUrls: ['./library-page.component.scss']
})
export class LibraryPageComponent implements OnInit {

  componentHtml : string = "";
  insertComponent(){
    this.componentHtml = "<cmp-parent></cmp-parent>"
  }
  constructor() { }

  ngOnInit(): void {
    this.insertComponent();
  }

  
}
