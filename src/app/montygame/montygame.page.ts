import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-montygame',
  templateUrl: './montygame.page.html',
  styleUrls: ['./montygame.page.scss'],
})
export class MontygamePage implements OnInit {

  constructor(private iab: InAppBrowser) { }

  ngOnInit() {
  }


}
