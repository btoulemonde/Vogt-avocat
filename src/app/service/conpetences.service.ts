import { Injectable } from '@angular/core';

@Injectable()
export class CompetenceService {

  active: number;

  feature = [
    {
      id: 1,
      title: 'Droit de la réparation du dommage corporel',
      icon : 'assets/image/dommage.png'
    },
    {
      id: 2,
      title: 'Droit de la famille, des personnes et de l\'enfant',
      icon : 'assets/image/famille.png'
    },
    {
      id: 3,
      title: 'Droit patrimonial des personnes',
      icon : 'assets/image/patrimonial.png'
    },
    {
      id: 4,
      title: 'Droit pénal',
      icon : 'assets/image/penal.png'
    },
    {
      id: 5,
      title: 'Droit civil général et des contrats',
      icon : 'assets/image/civil.png'
    },
    {
      id: 6,
      title: 'Procédure d\'appel',
      icon : 'assets/image/appel.png'
    }
  ];




}
