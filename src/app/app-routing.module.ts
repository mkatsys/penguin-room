import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomComponent } from './room/room.component';
import { PenguinListComponent } from './penguin-list/penguin-list.component';
import { PenguinDetailComponent } from './penguin-detail/penguin-detail.component';
import { PenguinNotFoundComponent } from './error/penguin-not-found/penguin-not-found.component';

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
  },{
    //詳細画面
    path:'list/detail/:id',
    component: PenguinDetailComponent
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
