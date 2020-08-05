import { Component, OnInit } from '@angular/core';
import { MywebService } from '../myweb.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
  aboutOn: boolean;

  constructor(private webService: MywebService) {}
  ngOnInit() {
    this.webService.removeClassEmitter.subscribe(
      (remove: boolean) => (this.aboutOn = remove)
    );
  }
}
