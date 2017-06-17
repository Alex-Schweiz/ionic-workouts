import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'workout-details',
  templateUrl: 'workout-details.html'
})
export class WorkoutDetailsPage {

  public workout;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.workout = this.navParams.get('workout');
  }

}
