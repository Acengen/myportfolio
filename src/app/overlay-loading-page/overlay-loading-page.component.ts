import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overlay-loading-page',
  templateUrl: './overlay-loading-page.component.html',
  styleUrls: ['./overlay-loading-page.component.css'],
})
export class OverlayLoadingPageComponent implements OnInit {
  overlay: boolean = true;
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.overlay = false;
    }, 2000);
  }
}
