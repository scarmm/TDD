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

//DIVISÃO

it ('Operação div', () => {
    let resultado = calculadora.div(10,2);
    expect(resultado).toEqual(5)
});

//POTÊNCIA

it ('Operação pot', () => {
    let resultado = calculadora.pot(2,2);
    expect(resultado).toEqual(4)
})
it ('Operação pot', () => {
    let resultado = calculadora.pot(10,2);
    expect(resultado).toEqual(100)
})
it ('Operação pot', () => {
    let resultado = calculadora.pot(2,3);
    expect(resultado).toEqual(8)
})
it ('Operação pot', () => {
    let resultado = calculadora.pot(1,10);
    expect(resultado).toEqual(100)
})
it ('Operação pot', () => {
    let resultado = calculadora.pot(10,2);
    expect(resultado).toEqual(100)
})
it ('Operação pot', () => {
    let resultado = calculadora.pot(10,2);
    expect(resultado).toEqual(100)
})


//MULTIPLICAÇÃO

it ('Operação mult', () => {
    let resultado = calculadora.mult(5,5);
    expect(resultado).toEqual(25)
})
resultado = () => calculadora.mult("a", 2);
    expect(resultado).toThrow('Não é um número');

it ('Operação mult', () => {
    let resultado = calculadora.mult(1,1);
    expect(resultado).toEqual(1)
})
resultado = () => calculadora.mult("b", 2);
    expect(resultado).toThrow('Não é um número');

it ('Operação mult', () => {
    let resultado = calculadora.mult(1,1);
    expect(resultado).toEqual(1)
})
resultado = () => calculadora.mult("c", 2);
    expect(resultado).toThrow('Não é um número');

it ('Operação mult', () => {
    let resultado = calculadora.mult(2,1);
    expect(resultado).toEqual(2)
})
resultado = () => calculadora.mult("d", 2);
    expect(resultado).toThrow('Não é um número');

it ('Operação mult', () => {
    let resultado = calculadora.mult(2,2);
    expect(resultado).toEqual(4)
})
resultado = () => calculadora.mult("e", 2);
    expect(resultado).toThrow('Não é um número');

it ('Operação mult', () => {
    let resultado = calculadora.mult(4,2);
    expect(resultado).toEqual(8)
})
resultado = () => calculadora.mult("f", 2);
    expect(resultado).toThrow('Não é um número');

it ('Operação mult', () => {
    let resultado = calculadora.mult(5,2);
    expect(resultado).toEqual(10)
})
resultado = () => calculadora.mult("g", 2);
    expect(resultado).toThrow('Não é um número');

it ('Operação mult', () => {
    let resultado = calculadora.mult(10,2);
    expect(resultado).toEqual(20)
})
resultado = () => calculadora.mult("h", 2);
    expect(resultado).toThrow('Não é um número');