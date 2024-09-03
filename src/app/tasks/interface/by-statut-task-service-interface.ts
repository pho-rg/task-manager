import {Etat, TaskModel} from "../model/task.model";

// Interface du service de filtre des tâches sur leur état
export interface ByStatutTaskServiceInterface {
  getTaskListByStatut(etats: Etat[]): TaskModel[];
}

