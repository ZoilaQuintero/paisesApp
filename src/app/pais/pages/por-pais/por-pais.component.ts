import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li{
      cursor:pointer;
    }
  `
  ],
})
export class PorPaisComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrasugerencias:boolean = false;


  constructor(private paisService: PaisService) {}
  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    console.log(this.termino);
    this.paisService.buscarPais(termino).subscribe(
      (paises) => {
        this.paises = paises;
        console.log(this.paises);
      },
      (erro) => {
        this.hayError = true;
        this.paises = [];
      }
    );
  }

  sugerencias(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrasugerencias = true;
    this.paisService.buscarPais(termino)
        .subscribe(paises=> this.paisesSugeridos = paises.splice(0,5),
        (err)=> this.paisesSugeridos = [])
  }

  buscarsugerido(termino:string){
    this.buscar(termino);
  }
}
