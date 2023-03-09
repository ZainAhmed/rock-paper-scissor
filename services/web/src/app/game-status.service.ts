import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GameStatus } from './gameStatus';

@Injectable({
  providedIn: 'root'
})
export class GameStatusService {
  private apiServiceUrl = "http://localhost:8080";
  constructor(private http:HttpClient) { }

  public getAllGamesStatuses(): Observable<GameStatus[]>{
    return this.http.get<GameStatus[]>(`${this.apiServiceUrl}/status/all`)
  }

  public addGamesStatuses( gameStatus: GameStatus): Observable<GameStatus>{
    return this.http.post<GameStatus>(`${this.apiServiceUrl}/status/add`,gameStatus)
  }

  public updateGammeStatus(gameStatus: GameStatus):Observable<GameStatus>{
    return this.http.put<GameStatus>(`${this.apiServiceUrl}/status/update`,gameStatus)
  }

}
