import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClassifierService } from '../classifier.service';
import { Http, RequestOptions, Request, RequestMethod } from '@angular/http';
import { Router, RouterModule } from '@angular/router';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-classifier',
  templateUrl: './classifier.component.html',
  styleUrls: ['./classifier.component.css']
})
export class ClassifierComponent implements OnInit {

  input = ""

  public malicious = []
  public legal = []

  constructor(private http: Http, private classifierService : ClassifierService) { }

  
  ngOnInit() {


  }

  submit(){
    this.classifierService.classifyInput(this.input)
    .subscribe(result =>{
      var classifiedAs = result.text();

      if(classifiedAs == 'NOT_MALICIOUS'){
        this.legal.push(this.input);
      } else{
        this.malicious.push(this.input);
      }
      this.input = ''
    })
  }

  onKey(event){
    if(event.keyCode == 13){
      this.submit();
    }
  }

  


}
