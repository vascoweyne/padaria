//POST
async function fetchApiDataProduto(event) {
    try {
      event.preventDefault();
      const body = {
        nome: document.querySelector('#produto').value,
        categoria: document.querySelector('#categoria').value
      };
  
      await fetch('http://localhost:3000/produto', {
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
  async function lerApiDataProduto(event) {
    try {
      event.preventDefault();
      await fetch('http://localhost:3000/produto', {
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
        document.getElementById("retorno").innerHTML = data[0].produtos
      })
    } catch (error) {
      alert('erro ao ler o produtos')
      throw new Error(error);
    }
  }
  
  //DELETE
  async function deletarProduto(event) {
    try {
      event.preventDefault();
      const id = document.querySelector('#id').value
      await fetch(`http://localhost:3000/produto/${id}`, {
        method: 'DELETE',
      })
      alert('produto deletada com sucesso')
    } catch (error) {
      alert('erro ao deletar o produto')
      throw new Error(error);
    }
  }
  
  //UPTADE
  async function uptadeProduto(event) {
    try {
      event.preventDefault();
      const id = document.querySelector('#id').value
      await fetch(`http://localhost:3000/produto/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          id: document.querySelector('#id').value,
          nome: document.querySelector('#produto').value
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        return response.json();
       }).then((data) => {
         console.log(data);
      })
      alert('produto atualizada com sucesso')
    } catch (error) {
      alert('erro ao atualizar o produto')
      throw new Error(error);
    }
  }