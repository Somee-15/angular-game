import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-gameover',
  templateUrl: './gameover.component.html',
  styleUrls: ['./gameover.component.css']
})
export class GameoverComponent implements OnInit {


  players : any;
  constructor(private playerService:PlayerService) { }

  ngOnInit() {
    
    console.log("am i getting executed ???")
    this.getPlayers();
  }
      getPlayers() {
        this.playerService.getPlayers().subscribe((x)  => {
          this.players = x
          console.log(this.players)
        });
      }
}


