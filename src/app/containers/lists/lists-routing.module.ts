import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListsComponent} from './lists.component';
import {ListComponent} from '../../list/list.component';

const listsRoutes: Routes = [
  { path: 'lists',  component: ListsComponent },
  { path: 'list/:id', component: ListComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(listsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ListsRoutingModule { }
