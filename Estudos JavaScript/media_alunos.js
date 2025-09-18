/*
    CODIGO IMPLEMENTADO PARA CALCULAR A MÉDIA FINAL DOS ALUNOS E JULGA-LOS COMO APROVADO E REPROVADO
    
    O RESULTADO SEGUEM O SEGUINTE FLUXO:
    MEDIA >= 6.0 -> APROVADO
    4.0 <= MEDIA < 6.0 -> RECUPERAÇÃO
    MEDIA < 4.0 -> REPROVADO 
*/

let lista_alunos = ['Maria', 'João', 'Pedro', 'Aline', 'Marcos', 'Gabriela']
let notas_p1 = [8.3, 6.2, 3.0, 9.4, 5.5]
let notas_p2 = [9.1, 6.0, 4.8, 7.2, 4.0]
let notas_p3 = [7.8, 7.0, 2.1, 8.8, 7.0]

let medias = []
let resultado = []
for (let i = 0; i< 5; i++){

    let media = (notas_p1[i] + notas_p2[i] + notas_p3[i]) / 3.0
    medias.push(media)

    if (media >= 6.0) {

        resultado.push('Aprovado')

    } else if (media >= 4.0) {

        resultado.push('Recuperação')

    } else {

        resultado.push('Reprovado')

    }
}

for (let i = 0; i < 5; i++){

    console.log('Status ' + lista_alunos[i] + ": " + resultado[i] + '\tMedia: ' + String(medias[i]))
    
}
