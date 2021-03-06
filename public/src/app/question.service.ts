import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class QuestionService {

  constructor(private _http: Http) { }

  index(){
    return this._http.get('/questions').map(data => data.json()).toPromise();
  }

  create(question){
    return this._http.post('/new_question', question ).map(data => data.json()).toPromise();
  }

  show(id:string){
    return this._http.get(`/question/${id}`).map(data => data.json()).toPromise();
  }
   upVote(id:string){
    return this._http.put(`/poll_/${id}`, {}).map(data => data.json()).toPromise();
  }
}
