import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { taskArray } from 'src/app/data/taskArray';
import { Router } from '@angular/router';
import { ITask } from 'src/app/models/task';
import { currentIndex } from './../../data/currentIndex';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Input() task: ITask

  constructor(private router: Router) { }

  currentIndex = currentIndex;

  onSubmit(form: NgForm) {  

    if (currentIndex.index === null) {
      taskArray.push({
        name: form.controls['task-name'].value,
        descripton: form.controls['task-descripton'].value,        
        isCompleted: false
      })
    } else {
      taskArray[currentIndex.index].name = form.controls['task-name'].value
      taskArray[currentIndex.index].descripton = form.controls['task-descripton'].value
      currentIndex.index = null
    }

    form.reset();

    this.router.navigate(['']);
  }
}
