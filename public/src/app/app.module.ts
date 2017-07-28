//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Components
import { AppComponent } from './app.component';
import { QuestionDashboardComponent } from './question-dashboard/question-dashboard.component';
import { LoginComponent } from './login/login.component';
import { CreatePollComponent } from './create-poll/create-poll.component';
import { ShowQuestionComponent } from './show-question/show-question.component';

//Services

import { UserService } from './user.service';

import { QuestionService } from './question.service';

@NgModule({
  declarations: [
    AppComponent,
    QuestionDashboardComponent,
    LoginComponent,
    CreatePollComponent,
    ShowQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    UserService,
    QuestionService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
