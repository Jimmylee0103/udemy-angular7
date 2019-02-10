import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
   styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer;
  serverCreationStatus = '';
  serverName = 'Server Name';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  countList = [];
  toggle = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onClickCount() {
    this.toggle = !this.toggle;
    // this.countList.push(this.countList.length + 1);
    this.countList.push(Date());

  }
  // getColor() {
  //   return this.countList >= 5 ? 'blue' : 'white';
  // }
}
