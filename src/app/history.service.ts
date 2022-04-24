import { Injectable } from '@angular/core';

export interface IHistory {
  id: number;
  text: string;
  date: string;
  action: string;
}

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  constructor() {}

  getHistory(): IHistory[] {
    let response = JSON.parse(localStorage.getItem('history')!);
    if (response === null) {
      return [];
    } else {
      return response;
    }
  }
  
  addHistory(text: string, action: string) {
    let historyArray: Object[] = this.getHistory();
    historyArray = historyArray[0] == {} ? [] : historyArray;
    let maxId: number = 0;
    historyArray.map((history: any) => {
      if (history['id'] > maxId) {
        maxId = history['id'];
      }
    });
    historyArray.push({
      id: maxId + 1,
      text: text,
      date: new Date().toLocaleString(),
      action
    });
    localStorage.setItem('history', JSON.stringify(historyArray));
  }

  clearHistory() {
    localStorage.removeItem('history');
  }

}
