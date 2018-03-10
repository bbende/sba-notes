import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NotesService {

  public API = '//localhost:9080/api';
  public NOTES_API = this.API + '/notes';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.NOTES_API);
  }

  get(id: string) {
    return this.http.get(this.NOTES_API + '/' + id);
  }

  save(note: any): Observable<any> {
    let result: Observable<Object>;
    if (note['href']) {
      result = this.http.put(note.href, note);
    } else {
      result = this.http.post(this.NOTES_API, note);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }

}
