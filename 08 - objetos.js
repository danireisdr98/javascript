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

console.log(pessoa.nome) // Acessando a propriedade *nome* 
console.log(pessoa.idade) //vendo o que tem dentro da propriedade *idade*
console.log(pessoa.profissao) // Acessando a propriedade *profissao*
console.log(pessoa.empregado) // Acesando a propriedade *empregado*
console.log(pessoa) //exibindo objeto completo

pessoa.saudacao() // chamando o metodo *saudacao*