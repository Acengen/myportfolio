import {  Project } from './../../Product.model';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-prod',
  templateUrl: './single-prod.component.html',
  styleUrls: ['./single-prod.component.css']
})
export class SingleProdComponent implements OnInit {
  
 @Input() project:Project;
 @Input() index:number;
 isConfig:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  isConfigClicked() {
    this.isConfig = true;
  }
  isNotConfig() {
    this.isConfig = false;
  }

}
