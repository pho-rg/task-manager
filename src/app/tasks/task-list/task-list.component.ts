import {Component, Input, OnInit} from '@angular/core';
import {TaskListModel} from "../model/taskList.model";

// Component de liste de tache
@Component({
  selector: 'app-task-list',
  // Architecture standalone
  /*standalone: true,
  imports: [TaskComponent],*/
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})

export class TaskListComponent {
  @Input() currentTaskList!: TaskListModel;
}



