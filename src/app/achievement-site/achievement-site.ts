import { Component, OnInit } from '@angular/core';
import { MatCard, MatCardHeader, MatCardTitleGroup, MatCardTitle, MatCardContent, MatCardSubtitle } from "@angular/material/card";
import { AchievementService } from '../services/achievement/achievement-service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-achievement-site',
  imports: [MatCard, MatCardHeader, MatCardTitleGroup, MatCardTitle, MatCardContent, MatCardSubtitle],
  templateUrl: './achievement-site.html',
  styleUrl: './achievement-site.scss',
})
export class AchievementSite implements OnInit{
  achievements: Achievement[] = [];
  constructor(private achievementService: AchievementService, private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
        this.achievements = this.achievementService.getAll();
    })
  }

}
