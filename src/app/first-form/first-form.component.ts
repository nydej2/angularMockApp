import { Component, OnInit } from '@angular/core';
import * as model from '../model-interface';

@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.css']
})
export class FirstFormComponent  {

  model = model;
  task: model.Task;

  constructor() {
    this.task = model.createInitialTask();
  }

  saveTask(value: any) {
    console.log(value);
    this.task = value;
  }

  addTag() {
    this.task.tags.push({label: ''});
    return false;
  }
  removeTag(i: number) {
    this.task.tags.splice(i,1);
  }
}
