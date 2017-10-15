import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material";

import { EventItemDialogComponent } from "../event-item-dialog/event-item-dialog.component";

@Component({
  selector: 'event-item-details',
  templateUrl: './event-item-details.component.html',
  styleUrls: ['./event-item-details.component.css']
})
export class EventItemDetailsComponent implements OnInit {

  eventDetails = [
    {"institute" : "KSR", "itemName" : "Item1", "icon" : "computer"},
    {"institute" : "www", "itemName" : "Item2", "icon" : "headset"},
    {"institute" : "ddd", "itemName" : "Item3", "icon" : "keyboard_voice"},
    {"institute" : "fff", "itemName" : "Item4", "icon" : "gamepad"},
    {"institute" : "rrr", "itemName" : "Item5", "icon" : "mouse"},
    {"institute" : "ttt", "itemName" : "Item6", "icon" : "speaker"},
    {"institute" : "hhh", "itemName" : "Item7", "icon" : "tablet"},
    {"institute" : "bbb", "itemName" : "Item8", "icon" : "toys"},
    {"institute" : "kkk", "itemName" : "Item9", "icon" : "watch"},
    {"institute" : "ppp", "itemName" : "Item10", "icon" : "videogame_asset"}
  ];

  constructor(private _dialog : MatDialog) { }

  ngOnInit() {
  }

  blockItem(){
    this._dialog.open(EventItemDialogComponent);
  }
}
