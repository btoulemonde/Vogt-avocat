import { Component, OnInit } from '@angular/core';
import { CompetenceService } from '../service/conpetences.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  features;

  constructor(private competence: CompetenceService, private router: Router) { }
  collapsed = true;

  ngOnInit() {
    this.features = this.competence.feature;
  }

  goTo(id: number) {
    this.competence.active = id;
    this.router.navigate(['domaineCompétences']);
  }
}
