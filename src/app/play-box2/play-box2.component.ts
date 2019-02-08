import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-play-box2",
  templateUrl: "./play-box2.component.html",
  styleUrls: ["./play-box2.component.css"]
})
export class PlayBox2Component implements OnInit {
  @Input() color: boolean;
  c2: string;
  constructor() {}

  ngOnInit() {}
  ngOnChanges() {
    console.log(this.color);
    if (this.color == true) this.c2 = "black";
    else this.c2 = "red";
  }
  onClick() {
    if (this.color == true) {
    }
  }
}
