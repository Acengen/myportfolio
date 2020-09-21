import {  Project } from './../Product.model';
import { Component, OnInit } from '@angular/core';
import { MywebService } from '../myweb.service';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css']
})
export class MyProjectsComponent implements OnInit {
  aboutme:boolean;
  projects:Project[];

  constructor(private mywebService: MywebService) { }

  ngOnInit(): void {
    this.projects = this.mywebService.getProducts();
    this.mywebService.removeClassEmitter.subscribe(
      (aboutme:boolean) => this.aboutme = aboutme
    )
    
  }

}
