import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { RoundResult } from './models/round-result';
import { RoundHistory } from './models/rounds-history';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rock-paper-scissors-frontend';
  resultsTable:RoundResult[] = [];
  roundHistory:RoundHistory;

  constructor (private httpClient:HttpClient) {}

  play() {
    this.httpClient
        .get<RoundResult>("http://localhost:8080/api/v1/playround")
        .subscribe(data => {
          this.resultsTable.push(data);
          this.getHistory();
        })
  }

  private getHistory() {
    this.httpClient
        .get<RoundHistory>("http://localhost:8080/api/v1/history")
        .subscribe(history => {
          this.roundHistory = history;
        })
  }

  restart() {
    this.resultsTable = [];
  }

  ngOnInit() {
    this.getHistory();
  }
}
