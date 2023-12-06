import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class NewService {

constructor(private http: HttpClient){
  
}

private url = 'http://127.0.0.1:8000/all'

consumirDados(){
  return this.http.get<any[]>(this.url).pipe(
    map(data => {
      data.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
      return data
    })
  )
}


buscarDados(id: number): Observable<any[]> {
    return this.http.get<any[]>(this.url);
}// Buscar dados relacionados ao ID
  




}