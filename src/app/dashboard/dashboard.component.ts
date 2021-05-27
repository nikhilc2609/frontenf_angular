import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { User } from '../user';
import { TokenStorageService } from '../_services/token-storage.service';
import { TopscoreService } from '../_services/topscore.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user:User=new User();
  currentUser: any;
  currentScore:any;

  constructor(private topscoreService:TopscoreService,private token: TokenStorageService) { }

  ngOnInit(): void {
    this.getUser();

  }
  private getUser(){
    this.currentUser = this.token.getUser();
    this.topscoreService.getUserById(this.currentUser.id).subscribe(data =>{
      this.user=data;
    });
 }
  ticketOne(){
    if(this.user.ticket>=1){
    this.user.ticket=this.user.ticket-1;
    this.currentScore=this.getScore(1,100);
    if(this.currentScore<=80)
    this.currentScore=this.getScore(1,20);
    else if(this.currentScore<=95)
    this.currentScore=this.getScore(21,80);
    else 
    this.currentScore=this.getScore(81,100);
    this.user.score=this.user.score+this.currentScore;
    Swal.fire(
      'You got '+this.currentScore+' points',
      'Now your Score is '+ this.user.score,
      'success'
    )
    this.topscoreService.updateScoreById(this.user).subscribe(data =>{
      this.user=data;
    })
  }
  else{
    Swal.fire(
      'Sorry!',
      'You dont have enough ticket',
      'error'
    )
  }
  }

  ticketFive(){
    if(this.user.ticket>=5){
      this.user.ticket=this.user.ticket-5;
      this.currentScore=this.getScore(1,100);
      if(this.currentScore<=50)
      this.currentScore=this.getScore(1,20);
      else if(this.currentScore<=80)
      this.currentScore=this.getScore(21,80);
      else 
      this.currentScore=this.getScore(81,100);
      this.user.score=this.user.score+this.currentScore;
      Swal.fire(
        'You got '+this.currentScore+' points',
        'Now your Score is '+ this.user.score,
        'success'
      )
      this.topscoreService.updateScoreById(this.user).subscribe(data =>{
        this.user=data;
      })
    }
    else{
      Swal.fire(
        'Sorry!',
        'You dont have enough ticket',
        'error'
      )
    }

  }

  ticketTen(){
    if(this.user.ticket>=10){
      this.user.ticket=this.user.ticket-10;
      this.currentScore=this.getScore(1,100);
      if(this.currentScore<=20)
      this.currentScore=this.getScore(1,20);
      else if(this.currentScore<=50)
      this.currentScore=this.getScore(21,80);
      else 
      this.currentScore=this.getScore(81,100);
      this.user.score=this.user.score+this.currentScore;
      Swal.fire(
        'You got '+this.currentScore+' points',
        'Now your Score is '+ this.user.score,
        'success'
      )
      this.topscoreService.updateScoreById(this.user).subscribe(data =>{
        this.user=data;
      })
    }
    else{
      Swal.fire(
        'Sorry!',
        'You dont have enough ticket',
        'error'
      )
    }

  }

  getScore(min:number,max:number){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
