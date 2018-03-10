import { Component, OnInit } from '@angular/core';
import { NotesService } from '../shared/notes/notes.service';
import { ErrorDialogComponent } from "../error-dialog/error-dialog.component";
import { MatDialog } from "@angular/material";


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes: Array<any>;

  constructor(private notesService: NotesService, private dialog: MatDialog) { }

  ngOnInit() {
    this.notesService.getAll().subscribe(
        data => this.notes = data,
        error => this.showError("Unable to load notes - " + error.status)
        //error => this.showError(error.message)
    );
  }

  showError(error : string) : void {
    this.dialog.open(ErrorDialogComponent, {
      data: {errorMsg: error}, width : '400px'
    });
  }

}
