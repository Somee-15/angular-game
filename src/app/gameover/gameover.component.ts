import { Component, OnInit } from "@angular/core";
import { PlayerService } from "../player.service";
import { Player } from '@angular/core/src/render3/interfaces/player';
import { Players } from '../player';

@Component({
  selector: "app-gameover",
  templateUrl: "./gameover.component.html",
  styleUrls: ["./gameover.component.css"]
})
export class GameoverComponent implements OnInit {
  players:any;

  constructor(private playerService: PlayerService) {}

  ngOnInit() {
    this.getPlayers();
  }
  getPlayers() {
    this.playerService.getPlayers().subscribe(data => {
      this.players = data;
      this.players.reverse();
    });
    console.log(this.players);
    
  }
}
