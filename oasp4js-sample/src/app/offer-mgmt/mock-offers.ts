import { Offer, Position } from './offer'; 

export var OFFERS: Array<Offer> = [
  new Offer(1, 'Schnitzel-Menü', 'Description of Schnitzel-Menü', "ORDERED", 6.99),
  new Offer(2, 'Goulasch-Menü', 'Description of Goulasch-Menü', "ORDERED", 7.99),
  new Offer(3, 'Pfifferlinge-Menü', 'Description of Pfifferlinge-Menü', "ORDERED" , 8.99),
  new Offer(4, 'Salat-Menü', 'Description of Salat-Menü', "ORDERED", 5.99),
  new Offer(5, 'Cola', 'Description of Salat-Menü 2', "ORDERED", 1.20), 
];

export var POSITIONS: Array<Position> = [
  new Position(1, OFFERS[0], 1, "ORDERED", 'Description of Schnitzel-Menü'),
  new Position(2, OFFERS[1], 2, "CANCELLED", 'Description of Goulasch-Menü'),
  new Position(3, OFFERS[2], 3, "PREPARED", 'Description of Pfifferlinge-Menü'),
  new Position(4, OFFERS[3], 4, "PREPARED", 'Description of Salat-Menü'),
  new Position(5, OFFERS[4], 5, "PREPARED", 'Description of Salat-Menü 2')
];

 