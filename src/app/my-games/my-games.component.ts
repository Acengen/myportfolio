import { MywebService } from './../myweb.service';
import { Game } from './../Game.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-games',
  templateUrl: './my-games.component.html',
  styleUrls: ['./my-games.component.css']
})
export class MyGamesComponent implements OnInit {
  games:Game[];
  isActive:boolean;
  constructor(private webService:MywebService) { }

  ngOnInit(): void {
    this.games = this.webService.getGames();
    this.webService.removeClassEmitter.subscribe(
      (isactive:boolean) => this.isActive = isactive
    )
  }

}
