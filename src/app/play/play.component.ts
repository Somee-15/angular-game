import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";

import { PlayerService } from "../player.service";

@Component({
  selector: "app-play",
  templateUrl: "./play.component.html",
  styleUrls: ["./play.component.css"]
})
export class PlayComponent implements OnInit {
  timeLeft: number = 10;
  score: number = 0;
  interval;
  timeSpeed = 1000;

  c1 = true;
  c2 = false;
  c3 = false;
  c4 = false;

  timestamp = 1000;

  constructor(private router: Router, private playerService: PlayerService) {}

  ngOnInit() {
    this.startTimer(this.timeSpeed);
  }

  startTimer(timeSpeed: any) {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        this.randomInter();
      } else {
        clearInterval(this.interval);
        this.switchtoScore();
      }
    }, timeSpeed);
  }

  switchtoScore() {
    this.playerService.setplayerScore(this.score).subscribe(console.log());
    this.playerService.setPlayersDetails().subscribe(console.log());
    this.router.navigate(["/", "gameover"]);
  }

  randomInter() {
    this.c1 = false;
    this.c2 = false;
    this.c3 = false;
    this.c4 = false;
    let number = Math.floor(Math.random() * 4 + 1);

    if (number == 1) {
      this.c1 = true;
    } else if (number == 2) {
      this.c2 = true;
    } else if (number == 3) {
      this.c3 = true;
    } else {
      this.c4 = true;
    }
  }

  onClick(value: boolean) {
    if (value == true) {
      this.score = this.score + 10;
      if (this.score > 30 && this.score < 50) {
        this.timeSpeed = 800;
      } else if (this.score > 100) {
        this.timeSpeed = 700;
      } else if (this.score > 110) {
        this.timeSpeed = 550;
      } else if (this.score > 200) {
        this.timeSpeed = 450;
      } else if (this.score > 300) {
        this.timeSpeed = 350;
      } else if (this.score > 400) {
        this.timeSpeed = 200;
      }
      clearInterval(this.interval);
      this.startTimer(this.timeSpeed);
      this.randomInter();
    } else {
      this.score = this.score - 5;
    }
  }
}
