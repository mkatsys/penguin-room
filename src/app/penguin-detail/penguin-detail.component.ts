import { Component, OnInit } from '@angular/core';
import { PENGUINS } from '../model/penguins';
import { ActivatedRoute } from '@angular/router';
import { PenguinlistClickService } from '../services/penguinlist-click.service';

@Component({
  selector: 'app-penguin-detail',
  templateUrl: './penguin-detail.component.html',
  styleUrls: ['./penguin-detail.component.scss']
})
export class PenguinDetailComponent implements OnInit {

  url : string = "";
  penguin: any ;

  constructor(
    //ActivatedRouteを使用してURLパラメータを取得
    //これはObservableを返すもの★ https://samehack.com/angular-pipe/
    //引数
    private route: ActivatedRoute,
    private service: PenguinlistClickService
    ) {
     console.log('constructor');
    }
  
    ngOnInit() {
      console.log('ngOnInit 	コンポーネントの初期化時に実行される');
      this.penguin = this.service.getClick();
      console.log(this.penguin);

      //subscribe  Observable インスタンスは誰かが購読すると値をパブリッシュしはじめます。購読するためにはインスタンスの subscribe() メソッドを呼び出し、オブザーバーオブジェクトを渡して通知を受け取ります。
      //アロー関数　function式の記述が不当
      //ラムダ式

      // const id = +this.route.snapshot.paramMap.get('id');
      // this.route.paramMap.subscribe(map => {
        // const id = Number(this.route.snapshot.paramMap.get('id'));
        // this.url = String(this.route.snapshot.paramMap.get('url'));
        // this.idopen = id;
        // this.penguin = this.penguins[id - 1];

        // const id = parseInt(map.get('id'), 10);
        //https://magazine.techacademy.jp/magazine/32015  Number()とparseInt()の違い


        // let idnum;
        // if (id) {
        //   idnum = parseInt( id );
        //   this.penguin = this.penguins[idnum - 1];
        // } else {
        //   idnum = null; }
      // })
    }
}
