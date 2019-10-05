import { Component, OnInit, Input } from '@angular/core';

@Component({
  // selector with htmltag
  selector: 'app-servers',

  // selector with Attribute
  // selector: '[app-servers]',

  // selector with Class
  //selector: '.app-servers',

  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  serverCreated = false;
  @Input() servers;

  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000);
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }
  onUpdateServerName(event : Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
