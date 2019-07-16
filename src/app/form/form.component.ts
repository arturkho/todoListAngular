import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  entityName: string;
  @Input() _usage: string;
  @Output() _submit = new EventEmitter();
  isSave = false;

  constructor() {
  }

  ngOnInit() {
  }

  save() {
    if (this.entityName && this.entityName !== '' && this.entityName.match(/^\s+$/) === null) {
      this.isSave = true;
      this._submit.emit(this.entityName);
    }
  }
}
