import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  taskName: string;

  @Input() _listId: any;
  @Input() _tasks: any;
  addTaskFormIsOpen: any;

  constructor() {

  }

  ngOnInit() {}
  addTask() {}
  changeTask() {}
  doneTask() {}
}
