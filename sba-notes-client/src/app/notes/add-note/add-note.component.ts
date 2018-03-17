import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddNoteComponent>) { }

  ngOnInit() {
      this.form = this.formBuilder.group({
        text: ''
      })
  }

  submit(form) {
    this.dialogRef.close(`${form.value.text}`);
  }

}
