//objetos são coleções de propriedades, onde cada propriedade é uma associação entre uma chave (ou nome) e um valor.
let pessoa = {
    nome: "joão pedro",
    idade: 17,
    profissao: "desenvolvedor",
    empregado: false,
    saudacao: function () {
        console.log("olá, meu nome é " + this.nome)
    }
}

pessoa.idade = 35 // mudando valor de idade *idade*
pessoa.profissao = "dev sênior"

console.log(pessoa)

pessoa.cidade = "penedo" //Adiciona uma nova propriedade

console.log(pessoa)

delete pessa.cidade // remove a propriedade
delete pessoa.saudacao // remove o metodo *saudacao*