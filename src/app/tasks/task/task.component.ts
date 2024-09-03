import {Component, Input} from '@angular/core';
import {TaskModel} from "../model/task.model";

// Component d'une tâche
@Component({
  selector: 'app-task',
  // Architecture standalone
  /*standalone: true,
  imports: [TaskStateColorDirective, TaskDateFormatPipe],*/
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {
  @Input() currentTask!:TaskModel;
}
