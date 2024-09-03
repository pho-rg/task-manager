import {TaskModel} from "../model/task.model";

// Interface du service CRUD
export interface CRUDTaskServiceInterface {
  getData(): TaskModel[];
}
