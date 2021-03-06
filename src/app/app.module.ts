import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { PlayComponent } from "./play/play.component";

import { HttpClientModule } from "@angular/common/http";
import { PlayBox1Component } from "./play-box1/play-box1.component";
import { PlayBox2Component } from "./play-box2/play-box2.component";
import { PlayBox3Component } from "./play-box3/play-box3.component";
import { PlayBox4Component } from "./play-box4/play-box4.component";
import { GameoverComponent } from "./gameover/gameover.component";
import { PlayerService } from "./player.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayComponent,
    PlayBox1Component,
    PlayBox2Component,
    PlayBox3Component,
    PlayBox4Component,
    GameoverComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
