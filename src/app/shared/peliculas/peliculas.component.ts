import { Component, Input, Output, EventEmitter } from '@angular/core';
import {filmI} from '../models/filmI.component'


@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent {

  @Input() name: string = "";

  @Input() film!: filmI;

  @Input() director: string = "";

  @Output() newDirector = new EventEmitter<string> ();


  sendNewDirector(director: string) {
    this.newDirector.emit(director)
    
  }



}
