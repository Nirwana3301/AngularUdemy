import { Component } from '@angular/core';

//Dekorator
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})

export class ServerComponent {
  serverId : number = 10;
  serverStatus : string = 'offline';

  allowNewServer : boolean = false;
  serverCreationStatus : string = 'No server was created!';
  serverName : string = 'TestServer';

  //Gets called when the component is created
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
  }

  onUpdateServerName(event : Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  getServerStatus() {
    return this.serverStatus;
  }
}
