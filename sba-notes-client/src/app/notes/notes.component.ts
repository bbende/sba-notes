import { Component, OnInit } from '@angular/core';
import { Note, NotesService } from '../shared/notes/notes.service';
import { ErrorDialogComponent } from "../error-dialog/error-dialog.component";
import { AddNoteComponent } from "./add-note/add-note.component";
import { MatDialog, MatDialogRef } from "@angular/material";
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes: Note[];
  addNoteDialogRef: MatDialogRef<AddNoteComponent>;

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
        );
  }

  removeNote(id : string) : void {
    this.notesService.remove(id).subscribe(
        result => { this.getNotes(); },
        error => this.showError("Unable to delete note - " + error.status));
  }

  addNote() : void {
    this.addNoteDialogRef = this.dialog.open(AddNoteComponent, {
          width : '400px'
    });

    this.addNoteDialogRef
            .afterClosed()
            .pipe(filter(text => text))
            .subscribe(text => {
                let newNote = {
                    id : "",
                    text : text
                };
                this.notesService.save(newNote)
                    .subscribe(
                        result => { this.getNotes(); },
                        error => this.showError("Unable to add note - " + error.status)
                    )
            });
  }

  showError(error : string) : void {
    this.dialog.open(ErrorDialogComponent, {
      data: {errorMsg: error}, width : '400px'
    });
  }

}
