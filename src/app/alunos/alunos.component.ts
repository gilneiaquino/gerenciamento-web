import { Component, OnInit } from '@angular/core';
import { Sexo } from '../enums/Sexo';
import { Aluno } from '../modelos/Aluno';
import { AlunosService } from './alunosService';
 

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public listaAluno: Aluno[] = [];
  public aluno: Aluno = new Aluno();


  constructor() { }


  carregarListaAluno(): Aluno[] {
    let listaAlunos: Aluno[] = [];
    let aluno1: Aluno = new Aluno();
    aluno1.nome = "Pedro";
    aluno1.dataNascimento = new Date();
    aluno1.sexo = Sexo.Masculino;


    let aluno2: Aluno = new Aluno();

    aluno2.nome = "Marcos";
    aluno2.dataNascimento = new Date();
    aluno2.sexo = Sexo.Masculino;


    let aluno3: Aluno = new Aluno();

    aluno3.nome = "Maria";
    aluno3.dataNascimento = new Date();
    aluno3.sexo = Sexo.Feminino;

    listaAlunos.push(aluno1);
    listaAlunos.push(aluno2);
    listaAlunos.push(aluno3);

    return listaAlunos;
  }
  ngOnInit(): void {
     this.listaAluno = this.carregarListaAluno();
    // this.alunosService.buscarListaAlunos().then(data =>  this.listaAluno = data);
  }

}
