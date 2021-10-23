export class Turma {
    private id: number;
    private turno: Turno;
    private nome: string = ''

    constructor(nome: string, turno: Turno) {
        this.nome = nome;
        this.turno = turno;
    }
}