import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  @Input() _listId: string;
  @Input() _tasks: any;
  @Input() _addTaskFormIsOpen: string;

  constructor() {

  }

  ngOnInit() {
  }

  openAddTaskForm(listId) {
    this._addTaskFormIsOpen = listId;
  }

  updateTask(newTask, index) {
    this._tasks.splice(index, 1, newTask);
  }

  createTask(taskName) {
    const id = '_' + Math.random().toString(36).substr(2, 9);
    const task = {taskName: taskName, taskId: id, isDone: false};
    this._tasks.unshift(task);
    this._addTaskFormIsOpen = '';
  }

  removeTask(index) {
    this._tasks.splice(index, 1);
  }

  closeForm(value) {
    console.log(value);
    this._addTaskFormIsOpen = value;
  }
}
