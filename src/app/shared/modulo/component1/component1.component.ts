import { ElementSchemaRegistry } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component {

  isBlue: boolean = true;
  isRed: boolean = true;
  age: number = 23;

  colorFondo: string = "yellow";

  isVisible: boolean = true;
  
  showHide = () => {
    
    if (this.isVisible) {
      this.isVisible = false
    } else {      
      this.isVisible = true    
    }  
    console.log('isVisbile: ', this. isVisible )  
  }

  persona1 =  {
    name: "Antonio", 
    color: "red" 
  }

  persona2 =  {
    name: "Juan", 
    color: "blue" 
  }


}
