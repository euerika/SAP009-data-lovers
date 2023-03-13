export function harryFunçoes(name, listCharacterHouseFilter) {
  return listCharacterHouseFilter.filter((user) => user.name.includes(name));
}

//FILTRO VER TODOS
export function filterHouse(house, characters) {
  return characters.filter((user) => user.house === house);
}

//ORDENAÇÃO
export const orderName = (a, b) => {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
};

export const selectNameAz = (characters) => {
  return characters.sort(orderName);
};
export const selectNameZa = (characters) => {
  return characters.sort(orderName).reverse();
};

//FILTRO POR CASAS

//export const filtroCasa = (allPersonagens) => {
//const resultadoCasas = allPersonagens.filter(function (house) {
//if (allPersonagens.house === null) {
//condição para o que for null não apareça no filtro pode usar diferente de null só ?
//return false;
//}
//const casaFiltro = allPersonagens.house.includes(house); //determina se a condição pode ser encontrado dentro da string
//return casaFiltro;
//});
//return resultadoCasas;
//};

//Recomendamos que este arquivo contenha toda a funcionalidade que corresponda a obter, processar e manipular dados (suas funções):
//* `filterData(data, condition)`: esta função receberia os dados e nos retornaria os que cumprem com a condição.
//* `sortData(data, sortBy, sortOrder)`: esta função recebe três parâmetros. O primeiro, `data`, nos entrega os dados. O segundo, `sortBy`, diz respeito a qual das informações quer usar para ordenar. O terceiro, `sortOrder`, indica se quer ordenar de maneira crescente ou decrescente.
//* `computeStats(data)`: essa função nos permite fazer cálculos estatísticos básicos para serem exibidos de acordo com o que os dados permitem.