import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() message: string;
  // tslint:disable-next-line:one-line
  saveTaskName(){
    console.log(this.message);
  }
}
