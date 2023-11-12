import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomComponent } from './room/room.component';
import { PenguinListComponent } from './penguin-list/penguin-list.component';
import { PenguinDetailComponent } from './penguin-detail/penguin-detail.component';
import { PenguinNotFoundComponent } from './error/penguin-not-found/penguin-not-found.component';
import { PenguinLoginComponent } from './penguin-login/penguin-login.component';
import { AquariumListComponent } from './aquarium-list/aquarium-list.component';
import { AquariumAddComponent } from './aquarium-add/aquarium-add.component';
import { AquariumEditComponent } from './aquarium-edit/aquarium-edit.component';
import { PenguinAddComponent } from './penguin-add/penguin-add.component';
import { PenguinEditComponent } from './penguin-edit/penguin-edit.component';
import { AquariumDetailComponent } from './aquarium-detail/aquarium-detail.component';
import { YatzyComponent } from './yatzy/yatzy.component';

const routes: Routes = [
  {
    //親パスの時のルート
    path:'',
    //「URLが完全一致した場合」
    pathMatch: 'full',
    component: RoomComponent
  },
  {
    //リスト
    path:'list',
    component: PenguinListComponent
  },
  {
    //ぺんぎん追加
    path:'penguin/add',
    component: PenguinAddComponent
  },
  {
    //ログイン
    path:'login',
    component: PenguinLoginComponent
  },
  {
    //水族館リスト
    path:'aquarium',
    component: AquariumListComponent
  },
  {
    //ヨット
    path:'yatzy',
    component: YatzyComponent
  },
  {
    //水族館追加
    path:'aquarium/add',
    component: AquariumAddComponent
  },
  {
    //詳細画面
    path:'list/detail/:id',
    component: PenguinDetailComponent
  },
  {
    //水族館詳細画面
    path:'aquarium/detail/:id',
    component: AquariumDetailComponent
  },
  {
    //水族館編集画面
    path:'aquarium/detail/:id/edit',
    component: AquariumEditComponent
  },
  {
    //404
    path:'**',
    component: PenguinNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
