import { Component } from '@angular/core';
import {lists} from '../lists';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  lists = lists;
  createList(listName) {
    const id = '_' + Math.random().toString(36).substr(2, 9);
    const list = {listName: listName, listId: id, tasks: []};
    this.lists.unshift(list);
  }
}
