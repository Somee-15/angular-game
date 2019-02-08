import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PlayComponent } from "./play/play.component";
import { GameoverComponent } from "./gameover/gameover.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "play",
    component: PlayComponent
  },

  {
    path: "gameover",
    component: GameoverComponent
  },

  {
    path: "**",
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
