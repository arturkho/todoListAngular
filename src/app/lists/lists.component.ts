import {Component, OnInit, Output} from '@angular/core';
import {lists} from '../lists';
import {TasksComponent} from '../tasks/tasks.component';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
  constructor() { }
  lists = lists;
  ngOnInit() {}
  setTascs() {
    lists.map((list) => {
      new TasksComponent(list.listId, list.tasks);
    });
  }
  // @Output() setTasks = new EventEmitter();
}
