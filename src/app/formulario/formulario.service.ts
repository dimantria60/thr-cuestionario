import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormularioService {
  constructor(private http: HttpClient) {}
  createForm(body: any) {
    return this.http.post('/question', body);
  }

  getData() {
    //const data = this.http.get('http://localhost:3000');
    return this.http.get('/question');
  }
}
