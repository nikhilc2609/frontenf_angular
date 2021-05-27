import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { TopscoreService } from '../_services/topscore.service';

@Component({
  selector: 'app-topscore',
  templateUrl: './topscore.component.html',
  styleUrls: ['./topscore.component.css']
})
export class TopscoreComponent implements OnInit {
  
  users:User[];
  constructor(private topscoreService:TopscoreService) { }

  ngOnInit(): void {
    this.getscores();
  }

  private getscores() {
    this.topscoreService.topscore().subscribe(data =>{
      this.users=data;
    });
  }
}