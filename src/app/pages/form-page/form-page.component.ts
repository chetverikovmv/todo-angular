import { currentIndex } from './../../data/currentIndex';
import { Component } from '@angular/core';
import { taskArray } from 'src/app/data/taskArray';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent {
  taskArray = taskArray
  currentIndex = currentIndex;

}
