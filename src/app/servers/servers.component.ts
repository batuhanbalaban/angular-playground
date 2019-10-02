import { Component, OnInit } from '@angular/core';

@Component({
  // selector with htmltag
  // selector: 'app-servers',

  // selector with Attribute
  // selector: '[app-servers]',

  // selector with Class
  selector: '.app-servers',

  template: `
  <app-server></app-server> 
  <app-server></app-server>
  `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
