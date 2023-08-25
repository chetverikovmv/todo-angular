import { Component, Input } from '@angular/core';
import { taskArray } from 'src/app/data/taskArray';
import { ITask } from 'src/app/models/task';
import { Router } from '@angular/router';
import { currentIndex } from 'src/app/data/currentIndex';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  constructor(private router: Router) { }

  @Input() task: ITask
  @Input() index: number
  @Input() filter: "All" | "Active" | "Completed"

  onCheck(index: number) {
    taskArray[index].isCompleted = !taskArray[index].isCompleted;
  }

  onDelete(index: number) {
    taskArray.splice(index, 1);
  }

  onEdit(index: number) {
    currentIndex.index = index;
    this.router.navigate(['form']);
  }
}
