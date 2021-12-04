import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Libro } from './libro';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_SERVER = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  public readContacts(){
    return this.httpClient.get<Libro[]>(`${this.API_SERVER}/libros`);
  }

  public createContact(libro: Libro){
    return this.httpClient.post<Libro>(`${this.API_SERVER}/libros`, libro);
  }

  public updateContact(libro: Libro){
    return this.httpClient.put<Libro>(`${this.API_SERVER}/libros/${libro.id}`, libro);
  }

  public deleteContact(id: number){
    return this.httpClient.delete(`${this.API_SERVER}/libros/${id}`);
  }
}
