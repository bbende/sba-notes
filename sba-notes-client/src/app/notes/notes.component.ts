import { Component, OnInit } from '@angular/core';
import { Note, NotesService } from '../shared/notes/notes.service';
import { ErrorDialogComponent } from "../error-dialog/error-dialog.component";
import { MatDialog } from "@angular/material";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes: Note[];

  constructor(
        private notesService: NotesService,
        private dialog: MatDialog) { }

  ngOnInit() {
    this.getNotes();
  }

  getNotes() {
    this.notesService.getAll().subscribe(
            data => this.notes = data,
            error => this.showError("Unable to load notes - " + error.status)
            //error => this.showError(error.message)
        );
  }

  removeNote(id : string) : void {
    this.notesService.remove(id).subscribe(
        result => { this.getNotes(); },
        error => console.error(error));
  }

  showError(error : string) : void {
    this.dialog.open(ErrorDialogComponent, {
      data: {errorMsg: error}, width : '400px'
    });
  }

}
