import {TaskModel} from "./task.model";

// Modele de liste de tache
export class TaskListModel {
  tasks!: TaskModel[];

  constructor(taskListModel:TaskModel[]) {
    this.tasks = taskListModel;
  }
}
