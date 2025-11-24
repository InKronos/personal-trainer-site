import { Routes } from '@angular/router';
import { HomeSite } from './home-site/home-site';
import { AchievementSite } from './achievement-site/achievement-site';

export const routes: Routes = [
    {path: '', component: HomeSite},
    {path: 'achievements', component: AchievementSite}
];

