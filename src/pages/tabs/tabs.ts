import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { AddWorkout } from '../add-workout/add-workout';
import { WorkoutsPage } from '../workouts/workouts';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  AboutRoot = AboutPage;
  AddWorkoutRoot = AddWorkout;
  workoutsRoot = WorkoutsPage;

  constructor() {

  }
}
