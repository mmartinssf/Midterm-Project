import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import '../../src/data/apiGet';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  
  data = api.nutriments.energy_value;
  

}
