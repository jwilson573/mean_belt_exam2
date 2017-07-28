import { Component, OnInit } from '@angular/core';
import { QuestionService } from './../question.service';
import { UserService } from './../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css']
})
export class CreatePollComponent implements OnInit {
currentUser = {_id: ''};
  newPoll = {user: ''};
  errors = [];
  constructor(
    private _questionService: QuestionService, 
    private _router: Router,
    private _userService: UserService
  ) { }

  ngOnInit() {
    this.currentUser = this._userService.getCurrentUser();
  }

  createQuestion(){
    console.log('function time')
    this.errors = [];
    this.newPoll.user = this.currentUser._id;
    return this._questionService.create(this.newPoll)
    .then(question => {
      console.log(this.newPoll)
      if(question.errors){
        console.log("Question Errors: ", question.errors)
        for(let key in question.errors){
          this.errors.push(question.errors[key].message);
          
        }
        console.log("This.errors:", this.errors);
      } else {
        this._router.navigateByUrl('/dashboard')

      }

    })
    .catch(err => console.log(err));
  }

  logout(){
    this._userService.logout();
    this._router.navigateByUrl('/');
  }

  isLoggedIn(){
    if(this._userService.getCurrentUser() == null){
      this._router.navigateByUrl('/');
    }
  }

}
