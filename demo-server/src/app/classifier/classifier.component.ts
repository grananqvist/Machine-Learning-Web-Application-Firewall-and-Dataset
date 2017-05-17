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

  public malicious = ['<script>', '</script>']
  public legal = ['test', 'hej']
  public count = 1

  constructor(private http: Http, private classifierService : ClassifierService) { }

  
  ngOnInit() {

    console.log(this.legal);
    console.log(this.malicious);
  }

  submit(input){
    this.classifierService.classifyInput(input)
    .subscribe(result =>{
      var inputs = {input : input}
      if(this.count%2 == 0){
        
        this.malicious.push(input);

      } else {
        this.legal.push(input);
      }
    })
    this.count = this.count + 1;
  }

  


}
