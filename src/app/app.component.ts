import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  serverElements = [];
  newServerName = '';
  newServerContent = '';
  
  
  
  onAddServerMain(serverData:{serverName: String, serverContent: String}) {
    //console.log("Hellloooo  "+serverData.serverContent);
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  } 

  onAddBlueprintMain(serverData:{serverName: String, serverContent: String}) {
    //console.log("Blueeeee  "+serverData.serverContent);
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

   
}
