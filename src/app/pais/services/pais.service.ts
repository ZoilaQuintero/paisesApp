import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUlr:string='https://restcountries.com/v2/';
  constructor(private http:HttpClient) { }
  buscarPais(termino:string):Observable <Country[]>{
    const url = `${this.apiUlr}/name/${termino}`;
    return this.http.get<Country[]>(url);
  }

  buscarCapital(termino:string):Observable <Country[]>{
    const url = `${this.apiUlr}/capital/${termino}`;
    return this.http.get<Country[]>(url);
  }

  getPaisPorAlpha(id:string):Observable <Country>{
    const url = `${this.apiUlr}/alpha/${id}`;
    return this.http.get<Country>(url);
  }
}
