import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

import { Person } from "../../interfaces/person";
import { HandleError, HttpErrorHandlerService } from "../common/http-error-handler.service";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class PersonService {

  private handleError: HandleError;

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandlerService) {
    this.handleError = httpErrorHandler.createHandleError('PersonService');
  }

  personUrl = "https://localhost:44354/api/Person/";

  addPerson(person: Person) : Observable<any> {
    return this.http.post<Person>(`${this.personUrl}create`, person, httpOptions)
    .pipe(
      catchError(this.handleError('addPerson', person))
    );
  }

  updatePerson(person: Person) : Observable<any> {
    return this.http.put<Person>(`${this.personUrl}update`, person, httpOptions)
    .pipe(
      catchError(this.handleError('updatePerson', person))
    );
  }
}
