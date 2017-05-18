import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ClassifierService {

  constructor(private http: Http) { }

  classifyInput(input) {
    return this.http.get('/api/classify/' + input);

  }

}
