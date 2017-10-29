import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {MaterialModule} from "./material.modules";

import {HomeComponent} from "./home/home.component";
import {ReportComponent} from "./report/report.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {EventItemDialogComponent} from "./event-item-dialog/event-item-dialog.component";
import {EventItemDetailsComponent} from "./event-item-details/event-item-details.component";
import {EventsComponent} from "./events/events.component";
import {NewEventDialogComponent} from "./new-event-dialog/new-event-dialog.component";


const APP_ROUTE: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'report', component: ReportComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [MaterialModule, RouterModule.forRoot(APP_ROUTE)],
  exports: [RouterModule],
  declarations: [HomeComponent, ReportComponent, PageNotFoundComponent, EventItemDialogComponent,
    EventItemDetailsComponent, EventsComponent, NewEventDialogComponent],
  entryComponents: [EventItemDialogComponent, NewEventDialogComponent]
})
export class AppRoutingModule {
}
