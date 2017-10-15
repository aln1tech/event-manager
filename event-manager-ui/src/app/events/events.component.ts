import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  showIcon : string = "keyboard_arrow_down";
  showEvents : boolean = false;
  callShowMethod : boolean = true;

  constructor() { }

  ngOnInit() {
  }

  showEventDetails(){
    this.showEvents = true;
    this.showIcon = "keyboard_arrow_up";
    this.callShowMethod = false;
    console.log("showeventdetails method called");
  }

  hideEventDetails(){
    this.showEvents = false;
    this.showIcon = "keyboard_arrow_down";
    this.callShowMethod = true;
    console.log("hideEventDetails method called");
  }
}
