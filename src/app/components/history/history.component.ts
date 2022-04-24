import { Component, OnInit } from '@angular/core';
import { HistoryService, IHistory } from 'src/app/history.service';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './history.component.html'
})
export class HistoryComponent implements OnInit {

  history: IHistory[] = [];
  emptyHistory: boolean = false;

  constructor(
    private historyService: HistoryService
  ) { 
      this.history = this.historyService.getHistory();
      this.history = this.history.reverse();
      if (this.history.length === 0) {
        this.emptyHistory = true;
      }
  }

  clearHistory() {
    this.historyService.clearHistory();
    this.history = this.historyService.getHistory();
    if (this.history.length === 0) {
      this.emptyHistory = true;
    }
  }

  ngOnInit(): void {
  }

}
