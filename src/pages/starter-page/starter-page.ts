import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SearchMasterPage } from '../search-master/search-master';

@Component({
  selector: 'starter-page',
  templateUrl: 'starter-page.html'
})
export class StarterPage {

  constructor(public navCtrl: NavController) {
  }

  moveToSearchPage() {
    this.navCtrl.push(SearchMasterPage);
  }

}
