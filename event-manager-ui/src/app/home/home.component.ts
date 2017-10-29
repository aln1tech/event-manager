import {Component, OnInit} from "@angular/core";
import {MatDialog, MatDialogConfig} from "@angular/material";
import {NewEventDialogComponent} from "../new-event-dialog/new-event-dialog.component";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _dialog: MatDialog) {
  }

  ngOnInit() {
  }


  openNewEvent() {
    const config = new MatDialogConfig();
    config.disableClose = true;
    this._dialog.open(NewEventDialogComponent, config);
  }

}
