import { Injectable } from '@angular/core';
import {TasksModule} from "../tasks.module";
import {Etat, TaskModel} from "../model/task.model";
import {CRUDTaskServiceInterface} from "../interface/crudtask-service-interface";

// Service de CRUD sur les tâches
@Injectable({
  providedIn: TasksModule
})
export class CRUDTaskListService implements CRUDTaskServiceInterface {
  // Jeu de données
  public data: TaskModel[] = [
    {titre: 'Banque', description: 'rib à éditer', date: new Date(), etat: Etat.A_FAIRE},
    {titre: 'Voiture', description: 'faire la vidange', date: new Date(), etat: Etat.EN_COURS},
    {titre: 'Bricolage', description: 'monter meubles sbd', date: new Date(), etat: Etat.TERMINEE},
    {titre: 'Voisin', description: 'devis mur mitoyen', date: new Date(), etat: Etat.TERMINEE}
  ]

  constructor() {}

  // GET
  getData(): TaskModel[] {
    return this.data;
  }

  /*
  // POST
  postTask(): {}

  // PUT
  putTask(): {}

  //DELETE
  deleteTask(): {}
  */
}
