import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkWithHref, RouterModule } from '@angular/router';
import { QuestionsService } from '../Services/questions.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
Answer:any;
quest:any;
count:number=1;
  constructor(private qs:QuestionsService , public route:Router) { }

  ngOnInit(): void {
    this.getSol();
    this.getAnswers();
  }
  getSol(){
    this.qs.getQ().subscribe((res)=>{
      this.quest=res;
      console.log("qas",res)
    })
  }

  getAnswers(){
    this.qs.getAns().subscribe((res)=>{
      this.Answer = res[0];
      console.log("anss",res)
      this.getMarks();
    })
  }

  getMarks(){
    this.quest.filter((res:any)=>{
      res.options.filter((opt:any)=>{
        if(opt.isAnswer==true){
          if(this.Answer[res.id]==opt.id){
            console.log("one",res.id)
            this.count=this.count+1
            console.log("count",this.count)
          }
        }
      })      
    })
  }
  
  redirect(){
    this.route.navigate(['/exam'])
  }

}
