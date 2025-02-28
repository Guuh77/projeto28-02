import{Item} from '../data/listaData';

//definimos o formato da interface de props, com o componente listaDeCompras
//lista de itens (array de Item)

type listaDeComprasProps = {
    itens:Item[];
}


function listaDeCompras(props: listaDeComprasProps){
    return(
        <>{
            /*
             
            */
        }
            <h2>Lista de Compras</h2>
            {props.itens.map(function(item){
                return(
                    <div key={item.id}>
                        <p>Produto: {item.nome}</p>
                        <p>Quantidade: {item.quantidade}</p>
                        <hr />
                    </div>
                )
            }
        )
        }
        </>
    )
};
export default listaDeCompras;