import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FreeGamesService {

  private url: string = environment.urlApi;

  constructor(
    private _http: HttpClient,
  ) { }


  getLiveGamesList(): Observable<any> {
    // let headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-Headers': 'Content-Type',
    //   'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    //   'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
    //   'x-rapidapi-key': 'undefined'
    // });
    let params = {
      per_page: '25', page: '0'
    }
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('x-rapidapi-host', 'free-to-play-games-database.p.rapidapi.com')
      .set('x-rapidapi-key', '1e79c04b74msh39f0906fbf7572ap1ef0e4jsnb33b28f48657')
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');

    return this._http.get('https://free-to-play-games-database.p.rapidapi.com/api/games', { headers: headers })

  }

  getGamesByPlatform(platform: string): Observable<any> {
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('x-rapidapi-host', 'free-to-play-games-database.p.rapidapi.com')
      .set('x-rapidapi-key', '1e79c04b74msh39f0906fbf7572ap1ef0e4jsnb33b28f48657')
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
    let params = {
      platform: platform
    }

    return this._http.get('https://free-to-play-games-database.p.rapidapi.com/api/games', { headers: headers, params: params })
  }

  getGamesByCategoryOrTag(category: string): Observable<any> {
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('x-rapidapi-host', 'free-to-play-games-database.p.rapidapi.com')
      .set('x-rapidapi-key', '1e79c04b74msh39f0906fbf7572ap1ef0e4jsnb33b28f48657')
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
    let params = {
      category: category
    }

    return this._http.get('https://free-to-play-games-database.p.rapidapi.com/api/games', { headers: headers, params: params })
  }


}
