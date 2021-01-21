import { Component, OnInit } from '@angular/core';
import { MywebService } from '../myweb.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  willShow: boolean;
  classes:string = ""
  openNav:boolean = false

  ngOnInit(): void {
    setTimeout(() => {
      this.willShow = true;
    }, 1000);
  }
  
   

  showNav() {
    this.openNav =true;
  }

  closeNav() {
    this.openNav = false
  }

  constructor(private webService: MywebService) {}
}
