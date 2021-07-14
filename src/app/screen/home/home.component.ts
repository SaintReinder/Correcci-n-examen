import { Component, OnInit } from '@angular/core';
import { Autores, ListaAutores} from '../../interface/homecomponent';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  lista:Array<Autores> = ListaAutores;
  aux!:HTMLInputElement;
  constructor() { }

  ngOnInit(): void {
  }

  onclick(aux3:string){
    this.aux = <HTMLInputElement>document.getElementById(aux3);
    if(this.aux.style.display == 'block'){
      this.aux.style.display = 'none';
    }else{
      this.aux.style.display = 'block';
    }
  }

}
