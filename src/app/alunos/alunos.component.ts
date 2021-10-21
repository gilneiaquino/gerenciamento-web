import { Component, OnInit } from '@angular/core';
import { Aluno } from '../modelos/Aluno';
import { AlunosService } from './alunosService';


@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public listaAluno: Aluno[] = [];

  constructor() {}


  carregarListaAluno(): Aluno[] {
    let listaAlunos: Aluno[] = [];
    let aluno1: Aluno = new Aluno("Pedro", 10)
    listaAlunos.push(aluno1);
    return listaAlunos;
  }

  ngOnInit(): void {
    this.listaAluno = this.carregarListaAluno();
   // this.alunosService.buscarListaAlunos().then(data =>  this.listaAluno = data);
  }

}
