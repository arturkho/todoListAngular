import { Component } from '@angular/core';
import {lists} from './lists';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  lists = lists;
  createList(listName) {
    const id = '_' + Math.random().toString(36).substr(2, 9);
    const list = {listName: listName, listId: id, tasks: []};
    this.lists.unshift(list);
  }
}
