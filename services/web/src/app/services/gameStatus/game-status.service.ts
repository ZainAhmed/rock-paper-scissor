import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { GameStatus } from '../../gameStatus';

@Injectable({
  providedIn: 'root'
})
export class GameStatusService {
  private apiServiceUrl = environment.apiBaseUrl;
  constructor(private http:HttpClient) { }

  public getGamesStatusById(id: Number): Observable<GameStatus>{
    return this.http.get<GameStatus>(`${this.apiServiceUrl}/status/find/${id}`)
  }

  public addGamesStatuses( gameStatus: GameStatus): Observable<GameStatus>{
    return this.http.post<GameStatus>(`${this.apiServiceUrl}/status/add`,gameStatus)
  }

  public updateGameStatus(gameStatus: GameStatus):Observable<GameStatus>{
    return this.http.put<GameStatus>(`${this.apiServiceUrl}/status/update`,gameStatus)
  }


  public updateGameStatusByAttribute(id:Number,attribute:String):Observable<GameStatus>{
    return this.http.put<GameStatus>(`${this.apiServiceUrl}/status/updateByAttribute`,{id:id,attribute:attribute})
  }

}
