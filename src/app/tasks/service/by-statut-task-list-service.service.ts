import {inject, Injectable} from '@angular/core';
import {TasksModule} from "../tasks.module";
import {CRUDTaskListService} from "./crudtask-list-service.service";
import {Etat, TaskModel} from "../model/task.model";
import {ByStatutTaskServiceInterface} from "../interface/by-statut-task-service-interface";

// Service de récupération du liste de tâches filtrées sur leur état
@Injectable({
  providedIn: TasksModule
})

export class ByStatutTaskListService implements ByStatutTaskServiceInterface {
  // Liste temporaire de toutes les tâches
  tempTaskList!: TaskModel[];
  // Liste des tâches filtrées sur leur statut
  tasksByStatus!: TaskModel[];


  // Implémentation du service CRUD sur les tâches
  crudTaskListService: CRUDTaskListService = inject(CRUDTaskListService);

  constructor() {}


  // Obtention d'une liste de tâches filtrées sur leur état
  getTaskListByStatut(etats: Etat[]): TaskModel[] {
    this.tempTaskList = this.crudTaskListService.getData();
    this.tasksByStatus = [];

    this.tempTaskList.forEach(task => {
      if(etats.includes(task.etat)) {
        this.tasksByStatus.push(task);
      }
    });

    return this.tasksByStatus;
  }
}
