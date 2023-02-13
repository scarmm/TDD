const { describe, expect, it } = require('@jest/globals')
const calculadora = require('../src/operacoes')

describe('Teste da calculadora', () => {

    // SOMA

    it('Operação de Soma', () => {
        let resultado = calculadora.sum(-1, 2);
        expect(resultado).toEqual(1)
    })
    resultado = () => calculadora.sum("a", 2);
    expect(resultado).toThrow('Não é um número');

    it('Operação de Soma', () => {
        let resultado = calculadora.sum(3, 2);
        expect(resultado).toEqual(5)
    })

    it('Operação de Soma', () => {
        let resultado = calculadora.sum(4, 4);
        expect(resultado).toEqual(8)
    })

    it('Operação de Soma', () => {
        let resultado = calculadora.sum(5, 5);
        expect(resultado).toEqual(10)
    })

    it('Operação de Soma', () => {
        let resultado = calculadora.sum(2, 2);
        expect(resultado).toEqual(4)
    })


})

// SUBTRAÇÃO

it ('Operação sub', () => {
    let resultado = calculadora.sub(3,2);
    expect(resultado).toEqual(1)
});



it ('Operação div', () => {
    let resultado = calculadora.div(10,2);
    expect(resultado).toEqual(5)
});

it ('Operação pot', () => {
    let resultado = calculadora.pot(10,2);
    expect(resultado).toEqual(100)
})

it ('Operação mult', () => {
    let resultado = calculadora.mult(5,5);
    expect(resultado).toEqual(25)
})

