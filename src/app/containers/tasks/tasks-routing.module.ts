import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TasksComponent} from './tasks.component';
import {TaskComponent} from '../../task/task.component';

const tasksRoutes: Routes = [
  { path: 'list/:id/tasks',  component: TasksComponent },
  { path: 'list/:id/task/:id', component: TaskComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(tasksRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TasksRoutingModule { }
