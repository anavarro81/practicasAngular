import { Component } from '@angular/core';
import { filmI } from '../models/filmI.component';

@Component({
  selector: 'app-videoclub',
  templateUrl: './videoclub.component.html',
  styleUrls: ['./videoclub.component.scss']
})

export class VideoclubComponent {


  name: string = "VideoClub del Pino";

  films: filmI [] = [

    {
      "titulo": "El Padrino",
      "director": "Francis Ford Coppola",
      "anyo": 1972,
      "genero": "Drama"
    },
    {
      "titulo": "Pulp Fiction",
      "director": "Quentin Tarantino",
      "anyo": 1994,
      "genero": "Crimen"
    },
    {
      "titulo": "Avatar",
      "director": "James Cameron",
      "anyo": 2009,
      "genero": "Ciencia ficción"
    },
    {
      "titulo": "Titanic",
      "director": "James Cameron",
      "anyo": 1997,
      "genero": "Drama"
    },
    {
      "titulo": "Star Wars: Episodio IV - Una nueva esperanza",
      "director": "George Lucas",
      "anyo": 1977,
      "genero": "Ciencia ficción"
    }



  ]

}
