import { Component, Input } from '@angular/core';
import {filmI} from '../models/filmI.component'

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent {

  @Input() name: string = "";

  @Input() film!: filmI;

}
