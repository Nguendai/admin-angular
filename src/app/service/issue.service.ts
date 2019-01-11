import { map } from 'rxjs/operators';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Issue } from '../model/issue.model';
import { Observable } from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  dataChange: BehaviorSubject<Issue[]> = new BehaviorSubject<Issue[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  getDialogData() {
    return this.dialogData;
  }
  constructor(public http: HttpClient ) {
    console.log("connected!");
  }
  get data(): Issue[] {
    return this.dataChange.value;
  }
  // getData(){
  //   return this.http.get("http://localhost:9999/note/allNotes");
  // }
  getAllIssues()  {
    
    this.http.get('http://localhost:9999/note/allNotes').subscribe((resutl :any) => {
        resutl.data as Issue[];
        this.dataChange.next( resutl.data);
        console.log(resutl);
      },
      (error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
      });
  }
  // : Observable<User> gán oject luôn
  createIssue(issue:Issue) {
    console.log(issue);
    //this.dialogData = issue;
    let url ="http://localhost:9999/note/addNewNode";
    return this.http.post(url, issue).subscribe(data => {
      console.log("done:"+data);
     
    },
    (error: HttpErrorResponse) => {
    console.log (error.name + ' ' + error.message);
    });
}
  updateIssue(issue:Issue){
    let url ="http://localhost:9999/note/editNewNode";
    return this.http.post(url, issue).subscribe(data => {
      console.log("done:"+data);
     
    },
    (error: HttpErrorResponse) => {
    console.log (error.name + ' ' + error.message);
    });

  }
deleteIssue(id:string){
  let url ="http://localhost:9999/note/deleteNote";
    return this.http.post(url, {id:id}).subscribe(data => {
      console.log("done:"+data);
     
    },
    (error: HttpErrorResponse) => {
    console.log (error.name + ' ' + error.message);
    });
}
}
