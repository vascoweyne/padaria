const elementoCrudProduto = document.querySelector('#datap')

async function getProduto(){
    const retorno = await fetch('http://localhost:3000/produto')
    const produto = await retorno.json()
    naTelaProduto(produto);
}

function naTelaProduto(produto){
    produto.forEach(element => {
        const produtoHTML = `

                    <th>${element.id}</th>
                    <th>${element.nome}</th>
                    <th>${element.categoria}</th>
                
        `
        elementoCrudProduto.innerHTML = elementoCrudProduto.innerHTML + produtoHTML
    })
}