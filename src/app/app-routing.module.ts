import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamComponent } from './exam/exam.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:'exam' , component : ExamComponent},
  { path:'home' , component:HomeComponent},
  { path: '', redirectTo: 'exam' , pathMatch: 'prefix'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
