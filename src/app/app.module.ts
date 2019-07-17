import {SimpleFormComponent} from './simple-form/simple-form.component';
import {TasksComponent} from './containers/tasks/tasks.component';
import {ListsComponent} from './containers/lists/lists.component';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
// import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {AppComponent} from './app.component';
import {TaskComponent} from './task/task.component';
import {ListComponent} from './list/list.component';
import {NotFoundComponent} from './not-found/not-found.component';

const appRoutes: Routes = [
  {path: 'list/:id', component: ListComponent},
  {
    path: 'task/:id',
    component: TaskComponent,
  },
  {path: '', redirectTo: '/lists', pathMatch: 'full'},
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListsComponent, TasksComponent, SimpleFormComponent, TaskComponent, ListComponent, NotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false}
    ),
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    // AngularFontAwesomeModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
