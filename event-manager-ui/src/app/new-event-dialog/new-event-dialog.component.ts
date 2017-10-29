import {Component, OnInit} from "@angular/core";
import {MatDialogRef} from "@angular/material";
import {FormControl, Validators} from "@angular/forms";
import {UploadFileService} from "../services/upload-file-service";
import {HttpEventType, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-new-event-dialog',
  templateUrl: './new-event-dialog.component.html',
  styleUrls: ['./new-event-dialog.component.css']
})
export class NewEventDialogComponent implements OnInit {

  eventNameController = new FormControl('', Validators.required);
  eventLastDateController = new FormControl('', Validators.required);

  eventName: string;
  eventLastDate: Date;
  selectedFiles: FileList
  currentFileUpload: File
  progress: { percentage: number } = {percentage: 0}

  constructor(private _dialogRef: MatDialogRef<NewEventDialogComponent>, private uploadService: UploadFileService) {
  }

  ngOnInit() {
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0)
    this.uploadService.pushFileToStorage(this.currentFileUpload, this.eventName, this.eventLastDate).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    })

    this.selectedFiles = undefined
  }

}
