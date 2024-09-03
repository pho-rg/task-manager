import {Component, inject, OnInit} from '@angular/core';
import {Etat, TaskModel} from "../model/task.model";
import {TaskListModel} from "../model/taskList.model";
import {TaskFacadeService} from "../service/task-facade.service";

// Smart component de gestion métier, se basant sur les dumb components task et task-list
@Component({
  selector: 'app-main-task',
  // Architecture standalone
  /*standalone: true,
  imports: [
    TaskListComponent
  ],*/
  templateUrl: './main-task.component.html',
  styleUrl: './main-task.component.css'
})

export class MainTaskComponent implements OnInit {
  // Liste des tâches à faire et en cours
  taskList!: TaskListModel;
  tasks!: TaskModel[];

  // Liste des tâches terminées
  archivedTaskList!: TaskListModel;
  archivedTasks!: TaskModel[];

  // Implémentation du service facade (un seul service appelé ; ce dernier regroupe les services nécessaire)
  taskFacade: TaskFacadeService = inject(TaskFacadeService);

  constructor() {}

  ngOnInit(): void {
    this.tasks = this.taskFacade.getTaskListByStatut([Etat.A_FAIRE, Etat.EN_COURS]);
    this.taskList = {tasks: this.tasks}

    this.archivedTasks = this.taskFacade.getTaskListByStatut([Etat.TERMINEE])
    this.archivedTaskList = {tasks: this.archivedTasks}
  }
}
