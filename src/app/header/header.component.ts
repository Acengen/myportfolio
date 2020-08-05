import { Component, OnInit } from '@angular/core';
import { MywebService } from '../myweb.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  showCircle: boolean = false;
  removeClass: boolean;
  constructor(private mywebService: MywebService) {}

  ngOnInit(): void {
    this.mywebService.removeClassEmitter.subscribe(
      (remove: boolean) => (this.removeClass = remove)
    );
    setTimeout(() => {
      this.showCircle = true;
    }, 1400);
  }

  removeLeftandRightSlide() {
    this.mywebService.removeOnClick();
  }
}
