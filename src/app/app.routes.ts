import { Routes } from '@angular/router';

// Router
export const routes: Routes = [
  // Route racine redirigé sur display
  { path: '', redirectTo:'display', pathMatch:'full'},
  // Route display, affiche la liste des taches, associé au module tasks
  { path: 'display', loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule)}
];
