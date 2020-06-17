import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCollapse, NgbPanelToggle } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {



  constructor( private router: Router) { }

  ngOnInit() {

  }

  onClick() {
    this.router.navigate(['/domaineCompétences']);





  }

}
