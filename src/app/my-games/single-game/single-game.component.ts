import { Game } from './../../Game.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-game',
  templateUrl: './single-game.component.html',
  styleUrls: ['./single-game.component.css']
})
export class SingleGameComponent implements OnInit {
@Input()  mygame:Game;
  constructor() { }

  ngOnInit(): void {
  }

}
