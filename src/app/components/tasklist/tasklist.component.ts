import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  @Input('name') name: string = 'default';
  @Input('completed') completed: boolean = false;
  @Input('id') id: number = 1;

  constructor() {
  }

  ngOnInit(): void {
  }

}
