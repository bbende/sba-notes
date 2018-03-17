import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from "./app-routing.module";
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { AboutComponent } from './about/about.component';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { NotesService } from './shared/notes/notes.service';
import { AddNoteComponent } from './notes/add-note/add-note.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    AboutComponent,
    ErrorDialogComponent,
    AddNoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    HttpClientXsrfModule.disable(),
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  entryComponents: [
    ErrorDialogComponent,
    AddNoteComponent
  ],
  providers: [
    NotesService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
