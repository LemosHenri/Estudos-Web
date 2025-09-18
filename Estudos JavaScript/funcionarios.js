/*
    CÓDIGO IMPLEMENTADO PARA DEFINIR UMA CLASSE PESSOA E UMA CLASSE FUNCIONÁRIO PARA O ARMAZENAMENTO DE DADOS DE CONTRIBUIDORES

    ESTE CÓDIGO VISA TRABALHAR CONHECIMENTOS BÁSICOS DE POO COMO O USO DE CLASSES, HERANÇA E POLIMORFISMO
*/

class Pessoa {

    constructor(nome, idade, cpf, telefone){
        this.nome = nome 
        this.idade = idade
        this.cpf = cpf 
        this.telefone = telefone
    }

    imprimir_dados(){

        console.log('Dados:\nNome: ' + this.nome +
            '\nIdade: ' + this.idade + 
            '\nCPF: ' + this.cpf + 
            '\nTelefone: ' + this.telefone
        )
        
    }

}


class Funcionario extends Pessoa {

    constructor(nome, idade, cpf, telefone, cargo, salario){

        super(nome, idade, cpf, telefone)

        this.cargo = cargo
        this.salario = salario
    }

    imprimir_dados(){

        console.log('Dados:\nNome: ' + this.nome +
            '\nIdade: ' + this.idade + 
            '\nCPF: ' + this.cpf + 
            '\nTelefone: ' + this.telefone + 
            '\nCargo: ' + this.cargo + 
            '\nSalario Bruto: R$' + this.salario
        )

    }

    calcular_salario() {

        let salario_descontado = this.salario * (1 - 0.075) 
        return salario_descontado
    }
}

// Inicialização da classa Pessoa em p1
const p1 = new Pessoa('Mario', 32, '1234567890', '(12)123456789')

// Imprimindo dados de Pessoa
p1.imprimir_dados()
console.log('\n')

// Inicialização da classe Funcionário
const f1 = new Funcionario('José', 23, '0987654321', '(99)987004321', 'Analista de Sistemas', 2500)

// Imprimindo dados do Funcionário 
f1.imprimir_dados()
console.log('Salário Líquido: R$' + f1.calcular_salario())

