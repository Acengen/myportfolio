import { Component, OnInit } from '@angular/core';
import { MywebService } from './myweb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isActive:boolean;
  ngOnInit(): void {
      this.webService.removeClassEmitter.subscribe(
        (isactive:boolean) => this.isActive = isactive
      )
  }
  constructor(private webService: MywebService){}
}
