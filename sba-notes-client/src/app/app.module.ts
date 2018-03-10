import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from "./app-routing.module";
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { AboutComponent } from './about/about.component';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { NotesService } from './shared/notes/notes.service';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    AboutComponent,
    ErrorDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  entryComponents: [
    ErrorDialogComponent
  ],
  providers: [
    NotesService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
