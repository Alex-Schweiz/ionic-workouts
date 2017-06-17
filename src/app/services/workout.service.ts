import { Injectable, EventEmitter } from '@angular/core';
import { Workout } from '../shared/workout.model';

@Injectable()
export class WorkoutsService {

  workoutsChanged = new EventEmitter<Workout[]>();

  private workouts: Workout[] = [
    {
      title: 'Push ups',
      repeats: 25,
      date: '15.06.2017',
      note: 'Note to my 1st workout'
    }, {
      title: 'Pull ups',
      repeats: 15,
      date: '15.06.2017',
      note: 'Note to my 2nd workout'
    },
    {
      title: 'Squats ups',
      repeats: 10,
      date: '16.06.2017',
      note: 'Note to my 3rd workout'
    },
    {
      title: 'Sit ups',
      repeats: 15,
      date: '17.06.2017',
      note: 'Note to my 4th workout'
    },
  ];

  constructor() {
  }

  getWorkouts() {
    return this.workouts;
  }

  addWorkout(workout) {
    this.workouts.push(workout);
    this.workoutsChanged.emit(this.workouts);
    console.log('Current workouts');
    console.log(this.workouts);
  }

}
