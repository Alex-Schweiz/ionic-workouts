import { Injectable } from '@angular/core';

@Injectable()
export class WorkoutsService {

  private workouts = [
    {
      title: 'Push ups',
      repeats: '25',
      date: '15.06.2017',
      note: 'Note to my 1st workout'
    }, {
      title: 'Pull ups',
      repeats: '25',
      date: '15.06.2017',
      note: 'Note to my 2nd workout'
    },
    {
      title: 'Squats ups',
      repeats: '30',
      date: '16.06.2017',
      note: 'Note to my 3rd workout'
    },
    {
      title: 'Sit ups',
      repeats: '25',
      date: '17.06.2017',
      note: 'Note to my 4th workout'
    },
  ];

  constructor() {
    console.log('Custom Workouts Service connected');
  }

  getWorkouts() {
    return this.workouts;
  }

}
