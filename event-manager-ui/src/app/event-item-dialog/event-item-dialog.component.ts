import { Component, OnInit } from '@angular/core';

import {  MatDialogRef} from "@angular/material";
@Component({
  selector: 'app-event-item-dialog',
  templateUrl: './event-item-dialog.component.html',
  styleUrls: ['./event-item-dialog.component.css']
})
export class EventItemDialogComponent implements OnInit {

  constructor(private _dialogRef : MatDialogRef<EventItemDialogComponent>) { }

  ngOnInit() {

  }

}
