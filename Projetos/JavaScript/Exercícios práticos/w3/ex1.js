const Aluno = function (nome, nota1, nota2){
    this.nome = nome;
    this.nota1 = nota1;
    this.nota2 = nota2;
    this.media = function(){
        return ((this.nota1 + this.nota2) / 2);
    }
}

let e01438 = new Aluno('Bryan', 90, 92);

console.log(`A nota média de ${e01438.nome} foi: ${e01438.media()}`);