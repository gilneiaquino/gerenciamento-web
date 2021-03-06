import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Aluno } from '../modelos/Aluno';
import { Turma } from '../modelos/Turma';


@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor(private http: HttpClient) {

  }
  private listaTurmaUrl: string = '/api/turma/listar';
  private listaAlunosUrl: string = '/api/aluno/listar';
  private cadastrarAlunoUrl: string = '/api/aluno/cadastrar';


  cadastrarAluno(aluno: Aluno): Observable<any> {
    let params = aluno;
    return this.http.post<any>(this.cadastrarAlunoUrl, params);
  }  

  carregarTurmas(): Observable<Turma[]> {
    let params = {};
    return this.http.post<Turma[]>(this.listaTurmaUrl, params);
  }

  carregarAlunos(): Observable<Aluno[]> {
    let params = {};
    return this.http.post<Aluno[]>(this.listaAlunosUrl, params);
  }

}
