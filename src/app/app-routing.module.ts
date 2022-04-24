import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TasklistComponent } from './components/tasklist/tasklist.component';
import { HistoryComponent } from './components/history/history.component';
import { TaskinsertComponent } from './components/taskinsert/taskinsert.component';

const routes: Routes = [
  {
    path: '',
    component: TaskinsertComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
