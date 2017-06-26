import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SearchResultsPage } from '../search-results/search-results';
import { StarterPage } from '../starter-page/starter-page';

@Component({
  selector: 'search-master',
  templateUrl: 'search-master.html'
})
export class SearchMasterPage {

  constructor(public navCtrl: NavController) {
  }

  openFreshCuts(haircut) {
    this.navCtrl.push(SearchResultsPage, {
      type: 'haircut'
    });
  }

  goToStartPage() {
    this.navCtrl.push(StarterPage);
  }

}
