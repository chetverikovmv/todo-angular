import { Component, OnInit } from '@angular/core';
import { taskArray } from 'src/app/data/taskArray';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  taskArray = taskArray
  constructor() { }
  ngOnInit(): void {
  }

  taskView: "All" | "Active" | "Completed" = "All"

  onAllClick() {
    this.taskView = "All"
  }
  onActiveClick() {
    this.taskView = "Active"
  }
  onCompletedClick() {
    this.taskView = "Completed"
  }
}
