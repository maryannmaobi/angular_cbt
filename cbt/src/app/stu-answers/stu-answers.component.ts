import { HttpClient } from '@angular/common/http';
import { element } from 'protractor';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { filter } from 'rxjs/operators';
import { data } from 'jquery';



@Component({
  selector: 'app-stu-answers',
  templateUrl: './stu-answers.component.html',
  styleUrls: ['./stu-answers.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class StuAnswersComponent implements OnInit {
  
  public noquestions = false;
  public answers = [];
  public students_id;
  public currentStudents;
  public correctpot = [];
  public anything = [];
  public myquestId;
  myopt: string;
  public optional = [];
  public correct: Number;
 public scores = '';
 public course_id = '';
 public student_id  = '';
  public checks;
  public bindings = 0;
  public bindingadd = 0;
  public right = [];
  public wrong = [];
  public newform = [];

  public questionsForm: FormGroup;

  constructor(private http:  HttpClient  , private fb: FormBuilder, public service: ApiService, public rout: Router, 
              public actroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.questionsForm = this.fb.group({})
    this.loadquests();
    // this.newform = this.fb.group({
    //    scores: this.optional,
    //    course_id: '',
    //    student_id: '',
    // })
  }

  loadquests(){
    this.service.getstudentsquestbycourseid().subscribe(data=>{
    const newdata = data;
    // console.log("data:", newdata);
    this.answers = newdata;
    this.students_id = this.actroute.snapshot.params.id; 
    console.log('students_id: ', this.students_id);
    const y = newdata.filter(stu => stu.Exam_No === this.students_id);
    this.answers = y;
    let controlObject = {};

    this.answers.map(question => {
      controlObject[`q${question.quest_id}`] = ['']
    })

    this.questionsForm = this.fb.group(controlObject);
    this.answers.map(question => {
      this.questionsForm.controls[`q${question.quest_id}`].setValue("")
    })
    console.log(this.questionsForm.value,"FORM CONTROL");
    // console.log(controlObject, " QUESTIONS CONTROL");
    if(y.length == 0){
     this.noquestions = true;
   }
    });

  }

  checkcorrectanswers(qid) {
      this.service.correctans().subscribe(data => {
      let e = data.filter(stus => stus.quest_id === qid);
      console.log(e);
      var storemyans = Object.keys(localStorage);
      var myansobj = "newobj" + storemyans.length;
        var ob = JSON.stringify(e);
        console.log(ob);
      localStorage.setItem(myansobj, ob);
      // console.log(localStorage.getItem('newitem'));
      e.forEach(element => {
      if (this.myopt !== element.correctans) {
      console.log(this.myopt);
      this.subtractingscore();
      console.log('wrong');
       } 
     else{
       this.addingscore()
     }
    let res = this.newform.find(e=>{
       return e.q_id === qid
     })
     if(res){
      res.option = this.myopt;
       console.log('exist')
     }
     else{
       this.newform.push({"q_id":qid,"option":this.myopt})
     }
     console.log(this.newform)

     });
    });
  }

  forward(id){
    console.log(id)
    this.anything = id
  }
  backwards(id){
   console.log(id)
   this.anything = id

  }
  
  
  addingscore(){
    this.bindingadd++;
    // this.correct = this.bindingadd++;
    console.log(this.bindingadd);
  }

  submitexam(){
    let score = 0;
    let userAns = this.questionsForm.value;
    let keys = Object.keys(userAns);
    keys.map(key => {
      let question_id = key.split('q')[1];
      let question = this.answers.filter(ans => ans.quest_id == question_id);
      let correctAns = question[0].correctans;
      
      if(correctAns == userAns[key]){
        score += 1;
      }else{
        score += 0;
      }
    })

    console.log(userAns, "USER ANSWER");
    console.log(score, "USER SCORE");
    // this.service.endexam({scores: this.bindingadd}).subscribe(data => {
    //   console.log(data);
    // })
    // let base = 'http://localhost/newcbt2/studentscore.php';
    
    // this.http.post(base,{scores: this.bindingadd}).subscribe(data => {
    //    console.log(data);
    // })
        // console.log(this.correct)
  }

 subtractingscore(){
    console.log(this.bindings)
  }

}
