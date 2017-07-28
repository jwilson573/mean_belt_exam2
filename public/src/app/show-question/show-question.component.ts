import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './../user.service';
import { QuestionService } from './../question.service';

@Component({
  selector: 'app-show-question',
  templateUrl: './show-question.component.html',
  styleUrls: ['./show-question.component.css']
})
export class ShowQuestionComponent implements OnInit {
question = { options: [] };
  param_id: string;
  constructor(
    private _router: Router,
    private _userService: UserService,
    private _questionService: QuestionService,

    private route: ActivatedRoute,
  ) 
  { 
    this.route.params.subscribe(param => {
    this.param_id = param.id
  })
  }

  ngOnInit() {
    this.isLoggedIn();
    this.getQuestion();
  }

   isLoggedIn(){
    if(this._userService.getCurrentUser() == null){
      this._router.navigateByUrl('/');
    }
  }

  getQuestion(){
    return this._questionService.show(this.param_id)
    .then(question => {
      console.log(question)
      this.question = question
    })
    .catch(err => { console.log(err)});
  }

  logout(){
    this._userService.logout();
    this._router.navigateByUrl('/');
  }

  upVote1(id: string, idx: number){
    return this._questionService.upVote(id)
    .then(answer => this.question.options[idx].votes++)
    .catch(err => console.log(err));
  }
}
