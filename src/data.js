//FILTRO VER TODOS personagens
export function harryFunçoes(nome, listaPersonagensFiltrados) {
  return listaPersonagensFiltrados.filter((harry) => harry.name.includes(nome));
}
//FILTRO VER TODOS
export function filtrarCasa(casa, personagens) {
  return personagens.filter((harry) => harry.house === casa);
}
//ORDENAÇÃO
export const ordemNome = (a, b) => {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
};
export const selecionaNomeAz = (personagens) => {
  return personagens.sort(ordemNome);
};
export const selecionaNomeZa = (personagens) => {
  return personagens.sort(ordemNome).reverse();
};
//FILTRO POR CASAS
<<<<<<< HEAD
export const filtrarPersonagemCasa = (personagens, casa) => {
  const resultadoCasas = personagens.filter(function (personagem) {
    if (personagem.house === null) {
      return false;
    }
    const casaFiltro = personagem.house.includes(casa); //determina se a condição pode ser encontrado dentro da string
    return casaFiltro;
  });
  return resultadoCasas;
};
//CÁLCULO AGREGADO
export const calcPorcentagem = (todos, parte) => {
  return (parte / todos).toFixed(2);
};
=======

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
>>>>>>> origin
