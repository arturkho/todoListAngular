import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {isBoolean} from 'util';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  newTaskName: string;
  @Input() _task: any;
  @Output() _newTask = new EventEmitter<{ taskName?: string, taskId?: string, isDone?: boolean }>();
  changeTask: string;

  constructor(private ar: ActivatedRoute) {}

  ngOnInit() {
    // this.ar.params.subscribe(param => console.log(param));
  }

  onChange(taskId) {
    this.changeTask = taskId;
  }

  acceptChanges(taskId) {
    if (this.newTaskName && this.newTaskName !== '' && this.newTaskName.match(/^\s+$/) === null) {
      this._task = {taskName: this.newTaskName, taskId: taskId, isDone: this._task.isDone};
      this._newTask.emit(this._task);
      this.changeTask = '';
    }
  }

  update(isDone) {
    if (isBoolean(isDone) && isDone !== this._task.isDone) {
      this._task = {taskName: this._task.taskName, taskId: this._task.taskId, isDone: isDone};
      this._newTask.emit(this._task);
    }
  }
}
