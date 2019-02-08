import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: "root"
})
export class PlayerService {
  playerName: string;
  playerScore: number;

  url = environment.dbUrl;

  constructor(private http: HttpClient) {}

  getPlayers() {
    return this.http.get(this.url);
  }

  setplayerName(value) {
    this.playerName = value;
  }

  setplayerScore(value) {
    this.playerScore = value;
  }

  setPlayersDetails() {
    return this.http
      .post(this.url, {
        name: this.playerName,
        score: this.playerScore
      })
  }
}
