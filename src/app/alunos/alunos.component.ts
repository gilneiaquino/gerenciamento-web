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

  ngOnInit(): void {
    this.carregarListaAlunos();
    this.carregarListaTurmas();
  }

  public cadastraAluno(aluno: Aluno) {
    this.alunosService.cadastrarAluno(aluno).subscribe({
      next: (resp) => {
        if(resp){
          this.carregarListaAlunos();
        } 
      }
    });
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
