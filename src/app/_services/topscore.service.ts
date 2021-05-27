import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class TopscoreService {
  constructor(private http: HttpClient) { }
  private TOP_API ="http://localhost:8080/get/topscore";
  private USER_API ="http://localhost:8080/get/user";
  private SCORE_API="http://localhost:8080/update/ticketandscore";

  topscore(): Observable<User[]> {
    return this.http.get<User[]>(`${this.TOP_API}`);
  }

  getUserById(id:number): Observable<User> {
    return this.http.get<User>(`${this.USER_API}/${id}`);
  }
  updateScoreById(user:User): Observable<any>{
    return this.http.put(`${this.SCORE_API}`,user);
  }
}
