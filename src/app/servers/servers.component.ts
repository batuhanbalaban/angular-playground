import { Component, OnInit } from '@angular/core';

@Component({
  // selector with htmltag
  // selector: 'app-servers',

  // selector with Attribute
  // selector: '[app-servers]',

  // selector with Class
  selector: '.app-servers',

  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;

  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000);
   }

  ngOnInit() {
  }

}
