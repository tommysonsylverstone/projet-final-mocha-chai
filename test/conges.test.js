const { describe } = require('mocha');
var assert = require('assert');
var expect = require('chai').expect;
const reste = 3;

const congesDuree = (d) => {
    return d >= 1;
}
const congesType = (t) => {
    if (t === "repos" ||
        t === "maladie" ||
        t === "urgent" ||
        t === "longue durée")
        return t;
    return false;
}
const congesCauseRepos = (t, c) => {
    if (!c) {
        if (t === "repos") return true;
        return false;
    }
}
const congesCauseAutre = (t, c) => {
    if (t === "maladie" || t === "urgent" || t === "longue durée") {
        if (!c) return false;
        return true;
    }
    return false;
}
const congesCauseDuree = (t, d) => {
    return t === "repos" && d < reste;
}

describe('congés', () => {
    describe('1 - duree', () => {
        it('doit être supérieur ou égal à 1', () => {
            assert.ok(congesDuree(reste));
        });
        it('doit être supérieur ou égal à 1', () => {
            assert.ok(congesDuree(0.1));
        });
    });
    describe('2 - type', () => {
        describe('repos', () => {
            it("doit être égal à repos", () => {
                expect(congesType('repos')).to.have.string('repos');
            });
            it("doit être égal à repos", () => {
                expect(congesType('repos45')).to.have.string('repos');
            });
        });
        describe('maladie', () => {
            it("doit être égal à maladie", () => {
                expect(congesType('maladie')).to.have.string('maladie');
            });
            it("doit être égal à maladie", () => {
                expect(congesType('maladie45')).to.have.string('maladie');
            });
        });
        describe('urgent', () => {
            it("doit être égal à urgent", () => {
                expect(congesType('urgent')).to.have.string('urgent');
            });
            it("doit être égal à urgent", () => {
                expect(congesType('urgent45')).to.have.string('urgent');
            });
        });
        describe('longue durée', () => {
            it("doit être égal à longue durée", () => {
                expect(congesType('longue durée')).to.have.string('longue durée');
            });
            it("doit être égal à longue durée", () => {
                expect(congesType('longue durée45')).to.have.string('longue durée');
            });
        });
    });
    describe('3 - cause vide', () => {
        it('doit être true si le type est de repos', () => {
            assert.ok(congesCauseRepos("repos"));
        });
        it('doit être true si le type est de repos', () => {
            assert.ok(congesCauseRepos("urgent"));
        });
    });
    describe('4 - cause non vide', () => {
        it('doit être true si le type n\'est pas repos ET a une cause', () => {
            assert.ok(congesCauseAutre("urgent", "doit aller chercher ma fille à l'école"));
        });
        it('doit être true si le type est de repos', () => {
            assert.ok(congesCauseAutre("urgent"));
        });
        it('doit être true si le type est de repos', () => {
            assert.ok(congesCauseAutre("maladie", "toux"));
        });
    });
    describe('5 - cause repos, valeur inférieur au reste', () => {
        it('doit être true si le type est de repos et que la durée est inférieur au reste', () => {
            assert.ok(congesCauseDuree("repos", 2));
        });
        it('doit être true si le type est de repos et que la durée est inférieur au reste', () => {
            assert.ok(congesCauseDuree("repos", 3));
        });
        it('doit être true si le type est de repos et que la durée est inférieur au reste', () => {
            assert.ok(congesCauseDuree("urgent", 3));
        });
    });
});