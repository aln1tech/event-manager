import { NgModule } from '@angular/core';
import { 
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatLineModule,
    MatIconModule,
    MatDialogModule,
    MatPaginatorModule
 } from "@angular/material";
 import { FlexLayoutModule } from "@angular/flex-layout";
 import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
 import 'hammerjs';

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
        MatPaginatorModule
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
        MatPaginatorModule
    ],
    declarations: [],
    providers: [],
})
export class MaterialModule { }
