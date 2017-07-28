import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionDashboardComponent } from './question-dashboard/question-dashboard.component';
import { LoginComponent } from './login/login.component';
import { ShowQuestionComponent } from './show-question/show-question.component';
import { CreatePollComponent } from './create-poll/create-poll.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LoginComponent },
  { path: 'dashboard', component: QuestionDashboardComponent },
  { path: 'create', component: CreatePollComponent },
  { path: 'poll/:id', component: ShowQuestionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
