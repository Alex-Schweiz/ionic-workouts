import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SearchMasterPage } from '../search-master/search-master';
import { BeautyService } from '../../app/services/beauty.service';

@Component({
  selector: 'search-results',
  templateUrl: 'search-results.html',
  providers: [BeautyService]
})
export class SearchResultsPage {

  public type;
  public city = 'MT';

  public services = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public _beautyService: BeautyService) {
    this.type = this.navParams.get('type');
    this.getBeauty();
  }

  goToSearchMaster() {
    this.navCtrl.push(SearchMasterPage);
  }

  getBeauty() {
    this.services = this._beautyService.getBeautyServices();
  }

}
