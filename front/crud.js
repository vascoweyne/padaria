//post
async function fetchApiDataCategoria(event) {
  try {
    event.preventDefault();
    const body = {
      nome: document.querySelector('#categoria').value,
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

//get
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
       document.getElementById("retorno").innerHTML = data[0].produtos
    })
  } catch (error) {
    throw new Error(error);
  }
}