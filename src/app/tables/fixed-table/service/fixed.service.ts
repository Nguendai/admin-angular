import { map } from 'rxjs/operators';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../../model/user.model';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class FixedService {

  constructor(public http: HttpClient ) {
    console.log("connected!");
  }

  getData(){
    return this.http.get("http://localhost:9999/note/allNotes");
  }
  // : Observable<User> gán oject luôn
  createArticle(id:number,content:string) {
    let url ="http://localhost:9999/note/addNewNode";
    // let httpHeaders = new HttpHeaders()
    //     .set('Content-Type', 'application/json');
    // let options = {
    //     headers: httpHeaders
    // };
    return this.http.post(url, {id:id,title:content});
}

}
