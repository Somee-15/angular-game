import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Players } from './player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  playerName:string;
  playerScore: number;

  constructor(private http:HttpClient) { }

  getPlayers () {
    return this.http.get("http://localhost:3004/players");
    
  }

  setplayerName(value){
    this.playerName=value;
    
  }

  setplayerScore(value){
    this.playerScore=value;
  }

  setPlayersDetails () {
   
    return this.http
  .post("http://localhost:3004/players", {
    "name": this.playerName,
    "score": this.playerScore
  })
  .subscribe(console.log);

  // console.log(event.target.id);
}

}
