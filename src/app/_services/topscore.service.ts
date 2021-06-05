import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class TopscoreService {
  constructor(private http: HttpClient) { }
  private API="https://springboot-probability.herokuapp.com";
  private TOP_API =this.API+"/get/topscore";
  private USER_API =this.API+"/get/user";
  private SCORE_API=this.API+"/update/ticketandscore";

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
