import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WorkoutsService } from '../../app/services/workout.service';
import { WorkoutDetailsPage } from "../workout-details/workout-details";

@Component({
  selector: 'workouts',
  templateUrl: 'workouts.html',
  providers: [WorkoutsService]
})

export class WorkoutsPage implements OnInit{

  public workouts;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public _workoutsService: WorkoutsService) {
  }

  ngOnInit() {
    this.workouts = this._workoutsService.getWorkouts();
    console.log(this.workouts);
  }

  workoutSelected(event, workout) {
    this.navCtrl.push(WorkoutDetailsPage, {
      workout: workout
    });
    console.log(workout);
  }
}
