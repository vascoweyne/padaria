const elementoCrud = document.querySelector('#data')

async function getCategoria(){
    const retorno = await fetch('http://localhost:3000/categoria')
    const categoria = await retorno.json()
    naTela(categoria);
}

function naTela(categoria){
    categoria.forEach(element => {
        const categoriaHTML = `

                    <th>${element.id}</th>
                    <th>${element.nome}</th>
                    <th>${element.produtos}</th>
                
        `
        elementoCrud.innerHTML = elementoCrud.innerHTML + categoriaHTML
    })
}

//getCategoria()