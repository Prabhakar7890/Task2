import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionsService } from '../Services/questions.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  constructor(private qs: QuestionsService, public route: Router) { }
  questions: {} | any;
  currentPage = 1;

  answers: any = {};

  ngOnInit(): void {
    this.getQuestions();

  }
  onSelect(questions: Question, options: Option) {
    this.answers[questions.id] = options.id
    console.log(this.answers);
  }
  getQuestions() {
    this.qs.getQa(this.currentPage).subscribe((res) => {
      this.questions = res;

    })
  }
  public changePage(delta: number): void {
    this.currentPage += delta;
    this.getQuestions();
  }

  onSubmit() {
    this.qs.postans(this.answers).subscribe((res) => {
      this.route.navigate(['/home']);


    })
  }

}
class Option {
  id: number;
  questionId: number;
  name: string;
  isAnswer: boolean;
  selected: boolean | any;

  constructor(data: any) {
    data = data || {};
    this.id = data.id;
    this.questionId = data.questionId;
    this.name = data.name;
    this.isAnswer = data.isAnswer;
  }
}

class Question {
  id: number;
  name: string;
  questionTypeId: number;
  options: Option[];
  answered: boolean | any;

  constructor(data: any) {
    data = data || {};
    this.id = data.id;
    this.name = data.name;
    this.questionTypeId = data.questionTypeId;
    this.options = [];
    data.options.forEach((o: any) => {
      this.options.push(new Option(o));
    });
  }
}

