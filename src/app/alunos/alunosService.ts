import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Aluno } from '../modelos/Aluno';

@Injectable()
export class AlunosService {

    constructor(private http: HttpClient) { 

    }

    buscarListaAlunos() {
        return this.http.get<any>('/aluno/cadastrar')
        .toPromise()
        .then(res => <Aluno[]>res.data)
        .then(data => { return data; });
    }


}