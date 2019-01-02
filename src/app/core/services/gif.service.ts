import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';




@Injectable({
  providedIn: 'root'
})
export class GifService {
  apiUrl = 'https://wt-ccb9e3c24cb97cbad63c29178f77010f-0.sandbox.auth0-extend.com/gif-battle';
  constructor(private http: HttpClient) { }


  //Create =================================
  // get a random gif
  getRandom(): Observable<any> {
    return this.http.get(`${this.apiUrl}/random`);
  }

  // store a gif
  saveGif() {

  }

  //Battle =================================

  //get a battle (2 gifs)

  getBattle() {

  }

  //vote on a gif
  vote(id) {

  }

  // Leaderboard

}
