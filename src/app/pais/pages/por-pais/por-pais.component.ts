import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css'],
})
export class PorPaisComponent {
  termino : string  = '';
  hayError: boolean = false;
  paises  : Country[] = [];
  constructor(private paisService: PaisService) {}
  buscar(termino:string) {
    this.hayError = false
    this.termino = termino
    console.log(this.termino);
    this.paisService.buscarPais(termino).subscribe(
      (paises) => {
        this.paises = paises;
        console.log(this.paises);
      },
      (erro) => {
        this.hayError = true;
        this.paises   = [];
      }
    );
  }

  sugerencias(termino:string){
this.hayError=false;
  }
}
