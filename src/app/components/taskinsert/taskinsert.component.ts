import { Component, Input, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/history.service';
import { TasksService } from 'src/app/tasks.service';
import { environment } from 'src/environments/environment';
import { Task } from '../../tasks.service';

@Component({
  selector: 'app-taskinsert',
  templateUrl: './taskinsert.component.html',
  styleUrls: ['./taskinsert.component.css']
})
export class TaskinsertComponent implements OnInit {

  task: String = '';
  tasks: Task[] = [];
  textEmpty: boolean = false;

  constructor(
    private tasksService: TasksService,
    private historyService: HistoryService
  ) { 
    this.tasks = this.tasksService.getTasks();
  }

  resetText() {
    this.task = '';
  }

  setTaskCompletedAndDelete(id: number) {
    let task = this.tasksService.getTask(id);
    if (task.completed) {
      this.tasksService.deleteTask(id);
      this.historyService.addHistory(`${task.task}`, 'delete');
      return this.tasks = this.tasksService.getTasks();
    }
    this.tasksService.setTaskCompleted(id);
    this.historyService.addHistory(`${task.task}`, 'completed');
    return this.tasks = this.tasksService.getTasks();
  }

  addTask() {
    if (this.task.length === 0) {
      return this.textEmpty = true;
    }
    this.tasksService.addTask(this.task);
    this.historyService.addHistory(`${this.task}`, 'add');
    this.task = '';
    this.textEmpty = false;
    return this.tasks = this.tasksService.getTasks();
  }

  ngOnInit(): void {
    let data = this.tasksService.getTasks();
    console.log(data);
  }

}
