import { Pipe, PipeTransform } from '@angular/core';
import { ITask } from '../models/task';

@Pipe({
  name: 'filterTasks'
})
export class FilterTasksPipe implements PipeTransform {

  transform(tasks: ITask[], filerTasks: "Active" | "Completed"): ITask[] {
   if (filerTasks === "Active") return tasks.filter(t => t.isCompleted === false);
   return tasks.filter(t => t.isCompleted === true);

  }

}
