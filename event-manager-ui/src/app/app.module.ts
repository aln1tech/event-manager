import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import {MaterialModule} from "./material.modules";
import {AppRoutingModule} from "./app.routing";

import {AppComponent} from "./app.component";
import {HeaderComponent} from "./shared/header/header.component";
import {UploadFileService} from "./services/upload-file-service";
import {HttpClientModule} from "@angular/common/http";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [UploadFileService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
