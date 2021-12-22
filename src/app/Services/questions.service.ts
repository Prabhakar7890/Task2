import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private hp:HttpClient) { }


  getQa(id:any):Observable<any> {
    return this.hp.get("http://localhost:4000/questions/"+id);  
  }
  postans(data1:any):Observable<any>{
    return this.hp.post("http://localhost:4000/answers",data1)
  }
  getAns():Observable<any>{
    return this.hp.get("http://localhost:4000/answers/");
  }
  getQ():Observable<any> {
    return this.hp.get("http://localhost:4000/questions/");  
  }

  
}
