import { Injectable} from '@angular/core';

@Injectable()
export class BeautyService {


  private workouts = [
    {
      title: 'Cut it out',
      service: 'haircut',
      city: 'NY',
    }, {
      title: 'True Barber',
      service: 'barberwork',
      city: 'NY',
    }, {
      title: 'Moustacher',
      service: 'moustache',
      city: 'NY',
    },  {
      title: 'Moustache master',
      service: 'moustache',
      city: 'NY',
    }, {
      title: 'Best hair',
      service: 'haircut',
      city: 'NY',
    }, {
      title: 'Cut it out',
      service: 'haircut',
      city: 'NY',
    }, {
      title: 'True Barber',
      service: 'barberwork',
      city: 'MT',
    }, {
      title: 'Moustacher',
      service: 'moustache',
      city: 'MT',
    },  {
      title: 'Moustache master',
      service: 'moustache',
      city: 'MT',
    }, {
      title: 'Best hair',
      service: 'haircut',
      city: 'MT',
    },{
      title: 'Best hair',
      service: 'haircut',
      city: 'MT',
    }, {
      title: 'Best hair',
      service: 'barberwork',
      city: 'QC',
    }, {
      title: 'Wanna try?',
      service: 'moustache',
      city: 'QC',
    }, {
      title: 'Cut it out',
      service: 'haircut',
      city: 'NY',
    }, {
      title: 'True Barber',
      service: 'barberwork',
      city: 'QC',
    }, {
      title: 'Moustacher',
      service: 'moustache',
      city: 'QC',
    },  {
      title: 'Moustache master',
      service: 'moustache',
      city: 'QC',
    },
  ];

  constructor() {
  }

  getBeautyServices() {
    return this.workouts;
  }

}
