import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() _task: any;
  changeTask: string;

  constructor() {
  }

  ngOnInit() {
  }

  onChange(taskId) {
    this.changeTask = taskId;
  }

  acceptChanges(changeValue) {
    this._task.taskname = changeValue;
  }
}
