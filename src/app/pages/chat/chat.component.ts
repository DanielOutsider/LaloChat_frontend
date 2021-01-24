import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  @ViewChild('sidenav') public sidenav: MatSidenav;

  
  constructor() { }
  

  ngOnInit(): void {
    
  }

  /* function public for toogle nav */
  
  public toogleNav(){
    this.sidenav.toggle();
  }

}
