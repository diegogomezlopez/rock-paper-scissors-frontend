import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { RoundResult } from './models/round-result';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rock-paper-scissors-frontend';
  resultsTable:RoundResult[] = [];

  constructor (private httpClient:HttpClient) {}

  play() {
    this.httpClient
    .get<RoundResult>("http://localhost:8080/api/v1/playround")
    .subscribe(data => {
      this.resultsTable.push(data);
    })
  }

  restart() {
    this.resultsTable = [];
  }
}
