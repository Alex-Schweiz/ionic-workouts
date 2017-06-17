import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WorkoutsService } from '../../app/services/workout.service';
import { WorkoutDetailsPage } from "../workout-details/workout-details";
import { Workout } from '../../app/shared/workout.model';

@Component({
  selector: 'workouts',
  templateUrl: 'workouts.html',
  providers: [WorkoutsService]
})

export class WorkoutsPage implements OnInit{

  public workouts: Workout[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public _workoutsService: WorkoutsService) {
  }

  ngOnInit() {
    this.workouts = this._workoutsService.getWorkouts();
    this._workoutsService.workoutsChanged
      .subscribe(
        (workouts: Workout[]) => {
          this.workouts = workouts;
        }
      );
    console.log('on init workouts');
    console.log(this.workouts);
  }

  workoutSelected(event, workout) {
    this.navCtrl.push(WorkoutDetailsPage, {
      workout: workout
    });
  }
}
