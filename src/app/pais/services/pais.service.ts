import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUlr:string='https://restcountries.com/v2/';

  get httpParams(){
    return new HttpParams().set('fields','name,capital,alpha2Code,flag,population');
  }
  constructor(private http:HttpClient) { }
  buscarPais(termino:string):Observable <Country[]>{
    const url = `${this.apiUlr}/name/${termino}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  buscarCapital(termino:string):Observable <Country[]>{
    const url = `${this.apiUlr}/capital/${termino}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  getPaisPorAlpha(id:string):Observable <Country>{
    const url = `${this.apiUlr}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  buscarRegion(region:string):Observable <Country[]>{
    const url = `${this.apiUlr}/regionalbloc/${region}`;
    return this.http.get<Country[]>(url, {params: this.httpParams})
    .pipe(
      tap(console.log)
    )
  }
}
