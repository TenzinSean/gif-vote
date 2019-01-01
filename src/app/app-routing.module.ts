import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BattleComponent } from './pages/battle/battle.component';
import { CreateComponent } from './pages/create/create.component';
import { LeaderboardComponent } from './pages/leaderboard/leaderboard.component';

const routes: Routes = [
  {
    path: '',
    component: BattleComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'leaderboard',
    component: LeaderboardComponent
  }
];//routing angular here

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
