import { Component, OnInit } from '@angular/core';
import { MywebService } from '../myweb.service';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.css'],
})
export class MySkillsComponent implements OnInit {
  aboutOn: boolean;

  constructor(private webService: MywebService) {}
  ngOnInit() {
    this.webService.removeClassEmitter.subscribe(
      (remove: boolean) => (this.aboutOn = remove)
    );
  }
}
