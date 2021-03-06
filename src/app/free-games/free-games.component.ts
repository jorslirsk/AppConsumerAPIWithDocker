import { Component, OnInit } from '@angular/core';
import { FreeGamesService } from './free-games.service';
import { Game } from './game.model'
import { FilterPipe } from '../free-games/pipe/filter.pipe';

@Component({
  selector: 'app-free-games',
  templateUrl: './free-games.component.html',
  styleUrls: ['./free-games.component.css']
})
export class FreeGamesComponent implements OnInit {
  title = 'Computacion en la nube - API CONSUMER';

  public games: Game[] = [];
  showTable: boolean = false;
  filterGame = '';
  showInputCategory: boolean = false;
  showInputPlatform: boolean = false;
  plataformaBuscada = '';
  categoriaBuscada = '';
  gamesNotFound: boolean = false;
  selectedCategory: boolean = false;
  selectedPlataforma: boolean = false;
  dataGames: boolean = false;
  categoriesString = "mmorpg, shooter, strategy, moba, racing, sports, social, sandbox, open-world, survival, pvp, pve, pixel, voxel, zombie, turn-based, first-person, third-Person, top-down, tank, space, sailing, side-scroller, superhero, permadeath, card, battle-royale, mmo, mmofps, mmotps, 3d, 2d, anime, fantasy, sci-fi, fighting, action-rpg, action, military, martial-arts, flight, low-spec, tower-defense, horror, mmorts";
  arrayCategories = this.categoriesString.split(', ');
  filterGames = '';

  constructor(
    private _freeGamesService: FreeGamesService,
  ) { }

  ngOnInit(): void {
  }

  getLiveGamesList() {
    this._freeGamesService.getLiveGamesList().subscribe(data => {
      if (data) {
        this.showTable = true;
        this.gamesNotFound = false;
        this.games = data;
        this.dataGames = true;
        this.selectedPlataforma = false;
        this.selectedCategory = false;
        console.log(data);
      }
    },
      error => {
        if (error.status == 404) {
          this.gamesNotFound = true;
          this.dataGames = false;
        }
      });
  }

  getGamesByPlatform() {
    if (this.plataformaBuscada != '') {
      return this._freeGamesService.getGamesByPlatform(this.plataformaBuscada).subscribe(data => {
        if (data) {
          this.showTable = true;
          this.gamesNotFound = false;
          this.games = [];
          this.games = data;
          this.selectedPlataforma = false;
          this.selectedCategory = false;
          this.dataGames = true;
        }
      }, error => {
        if (error.status == 404) {
          this.gamesNotFound = true;
          this.dataGames = false;
        }
      });
    } else {
      this.showTable = false;
      this.games = [];
      this.selectedPlataforma = true;
      this.dataGames = false;
      return true;
    }

  }

  getGamesByCategoryOrTag() {
    if (this.categoriaBuscada != '') {
      return this._freeGamesService.getGamesByCategoryOrTag(this.categoriaBuscada).subscribe(data => {
        if (data) {
          this.showTable = true;
          this.gamesNotFound = false;
          this.games = [];
          this.games = data;
          this.selectedPlataforma = false;
          this.selectedCategory = false;
          this.dataGames = true;
        }
      }, error => {
        if (error.status == 404) {
          this.gamesNotFound = true;
          this.dataGames = false;
        }
      });
    } else {
      this.showTable = false;
      this.games = [];
      this.selectedCategory = true;
      this.dataGames = false;
      return true;
    }
  }

}
