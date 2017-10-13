import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material";

import { EventItemDialogComponent } from "../event-item-dialog/event-item-dialog.component";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _dialog : MatDialog) { }

  ngOnInit() {
  }


  openEventItem(){
    this._dialog.open(EventItemDialogComponent);
  }
  
}
