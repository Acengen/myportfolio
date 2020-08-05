import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  open: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  openNav() {
    this.open = !this.open;
  }
  closeNav() {
    this.open = false;
  }
}
