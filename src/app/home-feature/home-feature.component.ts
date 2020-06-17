import { Component, OnInit } from '@angular/core';
import { CompetenceService } from '../service/conpetences.service';

@Component({
  selector: 'app-home-feature',
  templateUrl: './home-feature.component.html',
  styleUrls: ['./home-feature.component.css']
})
export class HomeFeatureComponent implements OnInit {
  features;

  constructor(private competence: CompetenceService) { }

  ngOnInit() {
    this.features = this.competence.feature;
  }

}
