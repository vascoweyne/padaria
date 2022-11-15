const createB = document.querySelector('#create')

createB.addEventListener('click', () => {
  const create = getCreateForm()

  criarProduto(create)
})


function getCreateForm(){
  const inputCategoria = document.querySelector('#categoria')
  const inputProduto = document.querySelector('#produto')
  if (inputCategoria.value === null || inputProduto === null){
    console.log('campos vazio')
    return;
  }
  const create = {
    categoria: inputCategoria.value,
    produto: inputProduto.value
  }
}

async function criarProduto(create) {
  const resposta = await fetch('http://localhost:3000/produto', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(create)
  })
   if(resposta.status === 201){
     limparCampos()
     window.location.href = 'home.html'
   }else{
     console.log('error');
   }
  console.log(resposta);
}

async function lerProduto(create) {
  try {
  const resposta = await fetch('http://localhost:3000/produto', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(create)
  })
   if(resposta.status === 201){
     limparCampos()
     window.location.href = 'home.html'
   }else{
     console.log('error');
   }
   }catch (error) {
      console.log(error);
   }
  console.log(resposta);
}





//  async function produto (){$.get("http://localhost:3000/produto", function (data) {}).done(function (
//    data
//  ) {
//    data.forEach((element) => {
//      console.log(element);
//      document.querySelector(
//        "#products-list"
//      ).innerHTML += `<li>${element.nome}, ${element.id}</li>`;
//    });
//  });
//  }