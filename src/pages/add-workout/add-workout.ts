import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { WorkoutsService } from '../../app/services/workout.service';
import { WorkoutsPage } from '../workouts/workouts';

@Component({
  selector: 'add-workout',
  templateUrl: 'add-workout.html',
  providers: [WorkoutsService]
})
export class AddWorkout {
  public workout;

  public title;
  public repeats;
  public date;
  public note;

  constructor(public navCtrl: NavController,
              private _workoutsService: WorkoutsService) {
  }

  onSubmit() {
    let workout = {
      title: this.title,
      repeats: this.repeats,
      date: this.date,
      note: this.note
    };
    this._workoutsService.addWorkout(workout);
    this.navCtrl.setRoot(WorkoutsPage);
    console.log('SUBMITTED');
  }

}
