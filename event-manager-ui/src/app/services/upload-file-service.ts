import {Injectable} from "@angular/core";
import {HttpClient, HttpEvent, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UploadFileService {

  constructor(private http: HttpClient) {
  }

  pushFileToStorage(file: File, eventName: string, eventLastDate: Date): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();

    formdata.append('item-list-file', file);
    formdata.append('event-name', eventName);
    formdata.append('event-last-date', eventLastDate.toDateString());
    const req = new HttpRequest('POST', '/api/new-event', formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<string[]> {
    return this.http.get('/getallfiles')
  }
}
