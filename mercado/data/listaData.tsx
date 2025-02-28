
//DEFINIR TYPE
export type Item = {
    id:number;
    nome:string;
    quantidade:number;//QUANTIDADE
};

//CRIAR UM ARRAY COM A LISTA DE COMPRAS, CONTENDOP VARIOS PRODUTOS
export const listaData: Item [] = [
    {id: 1, nome: 'Arroz',quantidade:2},
    {id: 2, nome: 'Feijão',quantidade:4},
    {id: 3, nome: 'Batata',quantidade:5},
    {id: 4, nome: 'Macarrão',quantidade:7},
    {id: 5, nome: 'Maça',quantidade:10},
];

export const listaFrutas: Item[] = [
    {id:1,nome:'Banana',quantidade:2},
    {id:1,nome:'Banana',quantidade:2},
    {id:1,nome:'Banana',quantidade:2},
    {id:1,nome:'Banana',quantidade:2},
    {id:1,nome:'Banana',quantidade:2}
];