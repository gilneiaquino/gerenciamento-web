import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Turma } from '../modelos/Turma';


@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor(private http: HttpClient) {

  }
  private listaTurmaUrl: string = '/api/turma/listar';


  getTurmas(): Turma[] {
    let listaTurmas: Turma[] = [];

    let turma = new Turma();
    turma.id = 1;
    turma.nome = 'Turma A';

    let turma2 = new Turma();
    turma2.id = 1;
    turma2.nome = 'Turma B';


    listaTurmas.push(turma);
    listaTurmas.push(turma2);

    return listaTurmas;
  }

  getTurmasServico(): Observable<Turma[]> {
    let params = {};
    return this.http.post<Turma[]>(this.listaTurmaUrl, params);
  }

}
