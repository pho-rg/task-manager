import {inject, Injectable} from '@angular/core';
import {TasksModule} from "../tasks.module";
import {CRUDTaskListService} from "./crudtask-list-service.service";
import {ByStatutTaskListService} from "./by-statut-task-list-service.service";
import {Etat, TaskModel} from "../model/task.model";

/* Service regroupant tous les besoins du module ; le smart component
ne sollicite que la facade et plus chacun des services*/
@Injectable({
  providedIn: TasksModule
})
export class TaskFacadeService {
  // Service CRUD
  crudTaskListService: CRUDTaskListService = inject(CRUDTaskListService);
  // Service de filtre des taches sur leur état
  byStatutTaskListService: ByStatutTaskListService = inject(ByStatutTaskListService);

  // Obtenir la liste complète des tâches
  getData(): TaskModel[] {
    return this.crudTaskListService.getData();
  }

  // Obtenir la liste des taches filtrées sur leur statut(s)
  getTaskListByStatut(etats: Etat[]): TaskModel[] {
    return this.byStatutTaskListService.getTaskListByStatut(etats);
  }

  constructor() { }
}
