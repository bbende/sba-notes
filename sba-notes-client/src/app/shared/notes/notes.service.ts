import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export interface Note {
    id: string;
    text: string;
}

@Injectable()
export class NotesService {

  public API = '//localhost:9080/api';
  public NOTES_API = this.API + '/notes';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Note[]> {
    return this.http.get<Note[]>(this.NOTES_API);
  }

  get(id: string) {
    return this.http.get<Note>(this.NOTES_API + '/' + id);
  }

  save(note: Note): Observable<Note> {
    let result: Observable<Note>;
    if (note['href']) {
      result = this.http.put<Note>(note.id, note);
    } else {
      result = this.http.post<Note>(this.NOTES_API, note);
    }
    return result;
  }

  remove(id: string) {
    return this.http.delete<Note>(this.NOTES_API + '/' + id);
  }

}
