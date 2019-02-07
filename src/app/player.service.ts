import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http:HttpClient) { }

  getPlayers () {
    return this.http.get("http://localhost:3004/players");
    
  }

  setPlayers (value) {
    return this.http
  .post("http://localhost:3004/players", {value})
  .subscribe(console.log);

  // console.log(event.target.id);
}

}
