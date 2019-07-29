import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Ali';
  name: string;

  ngOnInit(): void {
    this.name = 'Ali Ghorbani';
    this.showInfo();
  }

  showInfo() {
    console.log('log');
  }
}
