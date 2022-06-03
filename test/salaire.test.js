const { describe } = require('mocha');
var assert = require('assert');

const id_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const salaireId = (i) => {
    return id_list.indexOf(i) !== -1;
}
const salaireBrut = (b, n) => {
    return b > n + n * 0.1;
}
const salaireTaxe = (b, t) => {
    return b * 0.2 > t ;
}
const salaireAvance = (b, a) => {
    return b * 0.35 > a;
}

describe('Salaire', () => {
    describe('1 - id', () => {
        it('vérifie si l\'id existe dans le tableau id_list', () => {
            assert.ok(salaireId(5));
        });
        it('vérifie si l\'id existe dans le tableau id_list', () => {
            assert.ok(salaireId(0));
        });
        it('vérifie si l\'id existe dans le tableau id_list', () => {
            assert.ok(salaireId(15));
        });
    });
    describe('2 - brut', () => {
        it('doit être supérieur au net d\'au moins 10%', () => {
            assert.ok(salaireBrut(1500, 1100));
        });
        it('doit être supérieur au net d\'au moins 10%', () => {
            assert.ok(salaireBrut(1500, 1400));
        });
    });
    describe('3 - taxe', () => {
        it('ne doit pas dépasser 20% du brut', () => {
            assert.ok(salaireTaxe(1500, 150));
        });
        it('ne doit pas dépasser 20% du brut', () => {
            assert.ok(salaireTaxe(1500, 301));
        });
    })
    describe('4 - avance', () => {
        it('doit être inférieur à 35% du brut', () => {
            assert.ok(salaireAvance(1500, 150));
        });
        it('doit être inférieur à 35% du brut', () => {
            assert.ok(salaireAvance(1500, 600));
        });
    })
});