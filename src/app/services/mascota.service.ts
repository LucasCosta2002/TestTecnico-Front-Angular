import { Injectable } from '@angular/core';
import { enviorment } from '../enviorments/enviorments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mascota } from '../interfaces/mascota';


 //servie = peticiones, reutilizacion de codigo, comunicacion con components

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  private myAppUrl: string = enviorment.endpoint;
  private myApiUrl: string = 'api/Mascota/';

  constructor(private http: HttpClient) { }

  getMascotas (): Observable<Mascota[]>{
    return this.http.get<Mascota[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }
  getMascota (id: number): Observable<Mascota>{
    return this.http.get<Mascota>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }
  
  deleteMascota(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  addMascota(mascota: Mascota): Observable<Mascota> {
    return this.http.post<Mascota>(`${this.myAppUrl}${this.myApiUrl}`, mascota);
  }
  
  updateMascota(id: number, mascota: Mascota): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, mascota);
  }
}
