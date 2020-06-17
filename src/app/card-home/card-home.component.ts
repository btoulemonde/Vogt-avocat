import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbNavItem, NgbNavLink, NgbNavOutlet, NgbNavContent, NgbNavModule, NgbNavConfig } from '@ng-bootstrap/ng-bootstrap';
import { CompetenceService } from '../service/conpetences.service';

@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.css']
})
export class CardHomeComponent implements OnInit {


  @Input() icon: string;
  @Input() title: string;
  @Input() id: number;


  constructor(private router: Router, private competence: CompetenceService) { }

  ngOnInit() {

  }

  goTo(id: number) {
    this.competence.active = id;
    this.router.navigate(['domaineCompétences']);
  }

}
