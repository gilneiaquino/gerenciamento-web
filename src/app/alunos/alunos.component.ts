import { Component, OnInit } from '@angular/core';
import { Sexo } from '../enums/Sexo';
import { Aluno } from '../modelos/Aluno';
import { Turma } from '../modelos/Turma';
import { AlunosService } from './alunos.service';


@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public listaAluno: Aluno[] = [];
  public aluno: Aluno = new Aluno();
  public turmas: Turma[] = [];
  public turma: Turma = new Turma();


  constructor(private alunosService: AlunosService) {
  }


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
    this.carregarListaAlunos();
    this.carregarListaTurmas();
  }

  cadastraAluno(form: Aluno) {
    console.log(form);
  }


  private carregarListaTurmas(): void {
    this.alunosService.carregarTurmas().subscribe({
      next: (resp) => {
        this.turmas = resp;
      }
    });
  }

  private carregarListaAlunos(): void {
    this.alunosService.carregarAlunos().subscribe({
      next: (resp) => {
        this.listaAluno = resp;
      }
    });
  }


}
