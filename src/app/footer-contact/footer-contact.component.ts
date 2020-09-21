import { MywebService } from './../myweb.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-contact',
  templateUrl: './footer-contact.component.html',
  styleUrls: ['./footer-contact.component.css']
})
export class FooterContactComponent implements OnInit {
  isActive:boolean;
  constructor(private webService:MywebService) { }

  ngOnInit(): void {
    this.webService.removeClassEmitter.subscribe(
      (isactive:boolean) => this.isActive = isactive
    )
  }

}
