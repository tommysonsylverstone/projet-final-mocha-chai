const { describe } = require('mocha');
var expect = require('chai').expect;

const checkEmployeeName = (f, l) => {
    // f = first name, l = last name
    if (!f || typeof (f) === "number" || typeof (f) === "boolean" || typeof (f) === "object" || typeof (f) === "array" ||
        !l || typeof (l) === "number" || typeof (l) === "boolean" || typeof (l) === "object" || typeof (l) === "array") { return false; }
    return f + " " + l;
}
const checkEmployeeId = (i) => {
    if (isNaN(i)) return false;
    return i;
}
const checkEmployeeFirstNameLength = (f) => {
    if (f.length < 3) return false;
    return f;
}
const checkEmployeeLastNameLength = (l) => {
    if (l.length < 3) return false;
    return l;
}
const checkEmployeeAge = (a) => {
    if (a < 20) return false;
    return a;
}
const checkEmployeeStatus = (s) => {
    const admin = "admin";
    const ingegieur = "ingénieur";
    const technicien = "technicien";
    const ouvrier = "ouvrier";
    if (s === admin || s === admin.toUpperCase() ||
        s === ingegieur || s === ingegieur.toUpperCase() ||
        s === technicien || s === technicien.toUpperCase() ||
        s === ouvrier || s === ouvrier.toUpperCase())
        return s;
    return false;
}
const checkEmployeeAddressLength = (a) => {
    return typeof (a) === "string" ? a : false;
}
const checkEmployeeAddressTwoSpaces = (a) => {
    return a.indexOf(" ") === a.lastIndexOf(" ") ? false : a;
}

describe('Employés', () => {
    describe('Test 1 - Nom et prénom', () => {
        it('doit s\'assurer que les nom et prénom sont des chaines de caractères', () => {
            expect(checkEmployeeName('Benjamin', 'Tenreiro')).to.be.a('string');
        });
        it('doit s\'assurer que les nom et prénom sont des chaines de caractères', () => {
            expect(checkEmployeeName(15, 'Tenreiro')).to.be.a('string');
        });
        it('doit s\'assurer que les nom et prénom sont des chaines de caractères', () => {
            expect(checkEmployeeName('Benjamin', 15)).to.be.a('string');
        });
    });
    describe('Test 2 - id', () => {
        it('doit s\'assurer que id doit être un entier positif', () => {
            expect(checkEmployeeId(15)).to.be.a('number');
            expect(checkEmployeeId(15) % 1).to.equal(0);
        });
        it('doit s\'assurer que id doit être un entier positif', () => {
            expect(checkEmployeeId(0.5)).to.be.a('number');
            expect(checkEmployeeId(0.5) % 1).to.equal(0);
        });
        it('doit s\'assurer que id doit être un entier positif', () => {
            expect(checkEmployeeId('5')).to.be.a('number');
            expect(checkEmployeeId('5') % 1).to.equal(0);
        });
        it('doit s\'assurer que id doit être un entier positif', () => {
            expect(checkEmployeeId([1])).to.be.a('number');
            expect(checkEmployeeId([1]) % 1).to.equal(0);
        });
    });
    describe('Test 3 - longueur du prenom et nom', () => {
        describe('3.1 - Vérification du prénom', () => {
            it('doit s\'assurer que le prenom ait au moins 3 caractères', () => {
                expect(checkEmployeeFirstNameLength("Be")).to.have.lengthOf.above(2);
            });
            it('doit s\'assurer que le prenom ait au moins 3 caractères', () => {
                expect(checkEmployeeFirstNameLength("Ben")).to.have.lengthOf.above(2);
            });
            it('doit s\'assurer que le prenom ait au moins 3 caractères', () => {
                expect(checkEmployeeFirstNameLength("Benj")).to.have.lengthOf.above(2);
            });
        });
        describe('3.2 - Vérification du nom', () => {
            it('doit s\'assurer que le nom ait au moins 3 caractères', () => {
                expect(checkEmployeeLastNameLength("Te")).to.have.lengthOf.above(2);
            });
            it('doit s\'assurer que le nom ait au moins 3 caractères', () => {
                expect(checkEmployeeLastNameLength("Ten")).to.have.lengthOf.above(2);
            });
            it('doit s\'assurer que le nom ait au moins 3 caractères', () => {
                expect(checkEmployeeLastNameLength("Tenr")).to.have.lengthOf.above(2);
            });
        });
    });
    describe('Test 4 - age', () => {
        it('doit avoir age > 20', () => {
            expect(checkEmployeeAge(15)).to.be.at.least(20);
        });
        it('doit avoir age > 20', () => {
            expect(checkEmployeeAge(20)).to.be.at.least(20);
        });
        it('doit avoir age > 20', () => {
            expect(checkEmployeeAge(59)).to.be.at.least(20);
        });
        it('doit avoir age > 20', () => {
            expect(checkEmployeeAge("t")).to.be.at.least(20);
        });
    });
    describe('Test 5 - grade', () => {
        describe('admin', () => {
            it('doit être égal à "admin" ou "ADMIN"', () => {
                expect(checkEmployeeStatus("admin")).to.have.string("admin");
            });
            it('doit être égal à "admin" ou "ADMIN"', () => {
                expect(checkEmployeeStatus("ADMIN")).to.have.string("ADMIN");
            });
            it('doit être égal à "admin" ou "ADMIN"', () => {
                expect(checkEmployeeStatus("adMIn")).to.have.string("admin");
            });
            it('doit être égal à "admin" ou "ADMIN"', () => {
                expect(checkEmployeeStatus("adMIn")).to.have.string("ADMIN");
            });
        })
        describe('ingénieur', () => {
            it('doit être égal à "ingénieur" ou "INGÉNIEUR"', () => {
                expect(checkEmployeeStatus("ingénieur")).to.have.string("ingénieur");
            });
            it('doit être égal à "ingénieur" ou "INGÉNIEUR"', () => {
                expect(checkEmployeeStatus("INGÉNIEUR")).to.have.string("INGÉNIEUR");
            });
            it('doit être égal à "ingénieur" ou "INGÉNIEUR"', () => {
                expect(checkEmployeeStatus("ingéNieur")).to.have.string("ingénieur");
            });
            it('doit être égal à "ingénieur" ou "INGÉNIEUR"', () => {
                expect(checkEmployeeStatus("ingéNieur")).to.have.string("INGÉNIEUR");
            });
        });
        describe('technicien', () => {
            it('doit être égal à "technicien" ou "TECHNICIEN"', () => {
                expect(checkEmployeeStatus("technicien")).to.have.string("technicien");
            });
            it('doit être égal à "technicien" ou "TECHNICIEN"', () => {
                expect(checkEmployeeStatus("TECHNICIEN")).to.have.string("TECHNICIEN");
            });
            it('doit être égal à "technicien" ou "TECHNICIEN"', () => {
                expect(checkEmployeeStatus("Technicien")).to.have.string("technicien");
            });
            it('doit être égal à "technicien" ou "TECHNICIEN"', () => {
                expect(checkEmployeeStatus("Technicien")).to.have.string("TECHNICIEN");
            });
        });
        describe('ouvrier', () => {
            it('doit être égal à "ouvrier" ou "OUVRIER"', () => {
                expect(checkEmployeeStatus("ouvrier")).to.have.string("ouvrier");
            });
            it('doit être égal à "ouvrier" ou "OUVRIER"', () => {
                expect(checkEmployeeStatus("OUVRIER")).to.have.string("OUVRIER");
            });
            it('doit être égal à "ouvrier" ou "OUVRIER"', () => {
                expect(checkEmployeeStatus("Ouvrier")).to.have.string("ouvrier");
            });
            it('doit être égal à "ouvrier" ou "OUVRIER"', () => {
                expect(checkEmployeeStatus("OuVrier")).to.have.string("OUVRIER");
            });
        });
    });
    describe('6 - adresse', () => {
        describe('6.1 - longueur', () => {
            it('doit avoir une longueur de plus de 20', () => {
                expect(checkEmployeeAddressLength("27 avenue Jules Ferry")).to.have.lengthOf.above(19);
            });
            it('doit avoir une longueur de plus de 20', () => {
                expect(checkEmployeeAddressLength("27 avenue")).to.have.lengthOf.above(19);
            });
            it('doit avoir une longueur de plus de 20', () => {
                expect(checkEmployeeAddressLength([1,2,3,4,85,6,7,8,9,1,2,3,4,5,6,7,8,9,5])).to.have.lengthOf.above(19);
            });
        });
        describe('6.2 - au moins 2 espaces', () => {
            it('doit avoir 2 espaces', () => {
                expect(checkEmployeeAddressTwoSpaces("27 avenue Jules Ferry")).to.be.a('string');
            });
            it('doit avoir 2 espaces', () => {
                expect(checkEmployeeAddressTwoSpaces("27 avenue")).to.be.a('string');
            });
        });
    });
});