import { Component, OnInit } from "@angular/core";
import { PlayerService } from "../player.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private playService: PlayerService) {}

  ngOnInit() {}

  onClick(value: any) {
    this.playService.setplayerName(value).subscribe(console.log());
  }
}
