import { Injectable } from '@angular/core';
import { Turno } from '../enums/Turno';
import { Turma } from '../modelos/Turma';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor() { }

  getTurmas(): Turma[] {
    let listaTurmas: Turma[] = [];
 
    let turma = new Turma();
    turma.id = 1;
    turma.nome ='Turma A';

    let turma2 = new Turma();
    turma2.id = 1;
    turma2.nome ='Turma B';


    listaTurmas.push(turma);
    listaTurmas.push(turma2);

    return listaTurmas;
  }
}
