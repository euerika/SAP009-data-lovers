import {
  selectNameAz,
  selectNameZa,
  orderName,
  calcPorcentagem,
  filtrarCasa,
  filtrarPersonagemCasa
} from "../src/data.js";

const harry = {
  name: "Harry Potter",
  house: "Gryffindor",
};

const ron = {
  name: "Ronald Weasley",
  house: "Gryffindor",
};

const hermione = {
  name: "Hermione Granger",
  house: "Gryffindor",
};

const avery = {
  name: "Avery I",
  house: "Slytherin",
};

const malcolm = {
  name: "Malcolm Baddock",
  house: "Slytherin",
};

const bloody = {
  name: "Bloody Baron",
  house: "Slytherin",
};

const stewart = {
  name: "Stewart Ackerley",
  house: "Ravenclaw",
};

const marcus = {
  name: "Marcus Belby",
  house: "Ravenclaw",
};

const terry = {
  name: "Terry Boot",
  house: "Ravenclaw",
};

const cadwallader = {
  name: "Cadwallader",
  house: "Hufflepuff",
};

const owen = {
  name: "Owen Cauldwell",
  house: "Hufflepuff",
};

const cedric = {
  name: "Cedric Diggory",
  house: "Hufflepuff",
};

const african = {
  name: "African prince",
  house: null,
};

const albino = {
  name: "Albino peacock",
  house: null,
};

const personagens = [
  harry,
  ron,
  hermione,
  avery,
  malcolm,
  bloody,
  marcus,
  stewart,
  terry,
  cadwallader,
  owen,
  cedric,
  albino,
  african,
];

describe("orderName é uma função", () => {
  it("is a function", () => {
    expect(typeof orderName).toBe("function");
  });

  describe("selectNameAz é uma função", () => {
    it("is a function", () => {
      expect(typeof selectNameAz).toBe("function");
    });
  it("Deve selectNameAz de A-Z", () => {
    const resultado = selectNameAz(personagens);
    //expect(resultado).toEqual([
      african,
      albino,
      avery,
      bloody,
      cadwallader,
      cedric,
      harry,
      hermione,
      malcolm,
      marcus,
      owen,
      ron,
      stewart,
      terry,
    //]);
    expect(resultado[0]).toBe(["African prince"]);
  });

  describe("selectNameZa é uma função", () => {
    it("is a function", () => {
      expect(typeof selectNameZa).toBe("function");
    });
  it("Deve ordernar de Z-A", () => {
    const resultado = selectNameZa(personagens);
    expect(resultado).toEqual([
      terry,
      stewart,
      ron,
      owen,
      marcus,
      malcolm,
      hermione,
      harry,
      cedric,
      cadwallader,
      bloody,
      avery,
      albino,
      african,
    ]);
  });

//FILTRAR CASA
describe("filtraCasa é uma função", () => {
  it("is a function", () => {
    expect(typeof filtarCasa).toBe("function");
  });
  it ("ele retorna um array", () =>{
    expect( ).tobe(personagens.house)
  })
});

describe(" ", () => {
  it('is a true para ""', () => {
    expect(filtroCasa("")).toBe(Boolean);
  });

  it('is a true para "Hufflepuff"', () => {
    expect(filtroCasa("Hufflepuff")).toBe(true);
  });

  it('is a true para "Ravenclaw"', () => {
    expect(filtroCasa("Ravenclaw")).toBe(true);
  });

  it('is a retornar false para "Slytherin"', () => {
    expect(filtroCasa("Slytherin")).toBe(true);
  });

  it('is a retornar false para "Gryffindor "', () => {
    expect(filtroCasa("Gryffindor ")).toBe(true);
  });

  it('is a retornar false para "null"', () => {
    expect(filtroCasa("null")).toBe(false);
  });
});
//CÁLCULO AGREGAD
// describe("calcPercentage", () => {
//   it("is a  function ", () => {
//     expect(typeof calcPorcentagem).toBe("function");
//   });
  
//     it("retorna % de personagens de cada casa selecionadas , quanto é o total?", () => {
//       const totalDEcasasCasaSelecionada = calculo(dummyData, ["nome", "Gryffindor"]);
//       expect(totalDEcasasCasaSelecionada).toBe("x % são da casa Gryffindor");
//     });
  
//     it("return total ravenclaw characters", () => {
//       const totalDEcasasCasaSelecionada = calculo(dummyData, ["nome", "Ravenclaw"]);
//       expect(totalDEcasasCasaSelecionada).toBe("x % são da casa Ravenclaw");
       
//     });
  
//     it("return total hufflepuff characters", () => {
//       const totalDEcasasCasaSelecionada = calculo(dummyData, ["nome", "Hufflepuff"]);
//       expect(totalDEcasasCasaSelecionada).toBe("x % são da casa Hufflepuff");
//     });
  
//     it("return total slytherin characters", () => {
//       const totalDEcasasCasaSelecionada = calculo(dummyData, ["nome", "Slytherin"]);
//       expect(totalDEcasasCasaSelecionada).toBe("x % são da casa Slytherin");
//     });
//   });

// //describe('harryFunçoes retornora um array com todos os nome'), () => {
//   it('harryFunçoes deveria ser uma função', () =>{
//     expect(typeof harryFunçoes).toBe('function');
//   });