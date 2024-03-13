import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendServiceService {

  constructor(private http: HttpClient) {}

  ingresarDatos(data: any) {
    return this.http.post<any>('http://localhost:5000/api/ingresar/datos', data);
  }
}
