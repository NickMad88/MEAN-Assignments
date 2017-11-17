import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TaskService {

  tasks = [];


  constructor(private _http: Http) { }



  retrieveTasks(){
    this._http.get('/tasks').subscribe(
      (response) => { console.log(response.json()); },
      (error) => { console.log(error); }
    );

  }

  createTask(){
    this.tasks.push(task);
  }
}
