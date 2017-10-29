import {NgModule} from "@angular/core";
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatLineModule,
  MatListModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatToolbarModule,
  NoConflictStyleCompatibilityMode
} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import "hammerjs";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatGridListModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatLineModule,
    MatIconModule,
    MatDialogModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NoConflictStyleCompatibilityMode,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatGridListModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatLineModule,
    MatIconModule,
    MatDialogModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NoConflictStyleCompatibilityMode,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [],
})
export class MaterialModule {
}
