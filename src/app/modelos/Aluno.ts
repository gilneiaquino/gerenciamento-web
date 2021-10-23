import { Sexo } from "../enums/Sexo";

export class Aluno {
    nome: string = '';
    dataNascimento: Date = new Date();
    sexo: Sexo = Sexo.Masculino;
}
