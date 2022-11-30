//POST
async function fetchApiDataCategoria(event) {
  try {
    event.preventDefault();
    const body = {
      categoria: document.querySelector('#categoria').value,
      produtos: document.querySelector('#produto').value
    };

    await fetch('http://localhost:3000/categoria', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      console.log(response);
      console.log(body);


    });
  } catch (error) {
    throw new Error(error);
  }
}

//GET
async function lerApiDataCategoria(event) {
  try {
    event.preventDefault();
    await fetch('http://localhost:3000/categoria', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      document.getElementById("data").innerHTML = data[0].produtos
    })
  } catch (error) {
    alert('erro ao ler a categorias e produtos')
    throw new Error(error);
  }
}

//DELETE
async function deletarCategoriaProduto(event) {
  try {
    event.preventDefault();
    const id = document.querySelector('#id').value
    await fetch(`http://localhost:3000/categoria/${id}`, {
      method: 'DELETE',
    })
    alert('categoria deletada com sucesso')
  } catch (error) {
    alert('erro ao deletar a categoria')
    throw new Error(error);
  }
}

//UPTADE
async function uptadeCategoriaProduto(event) {
  try {
    event.preventDefault();
    await fetch(`http://localhost:3000/categoria/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        id: document.querySelector('#id').value,
        nome: document.querySelector('#categoria').value
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      return response.json();
    //  }).then((data) => {
    //    console.log(data);
    })
    alert('categoria atualizada com sucesso')
  } catch (error) {
    alert('erro ao atualizar a categoria')
    throw new Error(error);
  }
}