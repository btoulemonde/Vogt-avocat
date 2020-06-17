import { Component, OnInit, OnDestroy } from '@angular/core';
import { CompetenceService } from '../service/conpetences.service';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css']
})
export class CompetencesComponent implements OnInit, OnDestroy {

  active: number;

  public isMenuCollapsed = true;

  constructor(private competence: CompetenceService) { }

  ngOnInit() {
    this.active = 1;
    if (this.competence.active) {
      this.active = this.competence.active;
    }
  }

  ngOnDestroy(): void {
    this.competence.active = null;
  }




}
