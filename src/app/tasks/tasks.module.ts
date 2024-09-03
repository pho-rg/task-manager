import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import {TaskComponent} from "./task/task.component";
import {TaskListComponent} from "./task-list/task-list.component";
import {MainTaskComponent} from "./main-task/main-task.component";
import {TaskStateColorDirective} from "./task/task-state-color.directive";
import {TaskDateFormatPipe} from "./task/task-date-format.pipe";
import {CRUDTaskListService} from "./service/crudtask-list-service.service";
import {ByStatutTaskListService} from "./service/by-statut-task-list-service.service";
import {TaskFacadeService} from "./service/task-facade.service";

// Module de gestion des listes de tâches
@NgModule({
  // Components, directives, pipes
  declarations: [TaskComponent, TaskListComponent, MainTaskComponent, TaskStateColorDirective, TaskDateFormatPipe],
  imports: [
    CommonModule,
    TasksRoutingModule,
  ],
  // Services
  providers: [CRUDTaskListService, ByStatutTaskListService, TaskFacadeService]
})
export class TasksModule {}
