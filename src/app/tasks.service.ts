import { Injectable } from '@angular/core';

export interface Task {
  id: number;
  task: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  getTasks(): Task[] {
     let response = JSON.parse(localStorage.getItem('tasks')!);
     if (response === null) {
        return [];
      } else {
        return response;
      }
  }

  addTask(task: String) {
    let taskArray: Object[] = this.getTasks();
    taskArray = taskArray[0] == {} ? [] : taskArray;
    // get max task id in taskArray
    let maxId: number = 0;
    taskArray.map((task: any) => {
      if (task['id'] > maxId) {
        maxId = task['id'];
      }
    });
    taskArray.push({
      id: maxId + 1,
      task: task,
      completed: false
    });
    localStorage.setItem('tasks', JSON.stringify(taskArray));
  }

  setTaskCompleted(id: number) {
    let taskArray: any = this.getTasks();
    taskArray = taskArray[0] == {} ? [] : taskArray;
    taskArray.map((task: Task) => {
      if (task['id'] == id) {
        task['completed'] = !task['completed'];
      }
    });
    localStorage.setItem('tasks', JSON.stringify(taskArray));
  }

  getTask(id: number) {
    let taskArray: any = this.getTasks();
    taskArray = taskArray[0] == {} ? [] : taskArray;
    let task: Task = taskArray.find((task: Task) => {
      return task['id'] == id;
    });
    return task;
  }

  deleteTask(id: number) {
    let taskArray: any = this.getTasks();
    taskArray = taskArray[0] == {} ? [] : taskArray;
    taskArray = taskArray.filter((task: Task) => {
      return task['id'] != id;
    });
    localStorage.setItem('tasks', JSON.stringify(taskArray));
  }

  constructor() { }
}
