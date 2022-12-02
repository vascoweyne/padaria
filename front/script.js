  async function enviarLoginParaApi(event) {
    try{
      event.preventDefault();
      const user = {
        email: document.querySelector('#email').value,
        senha: document.querySelector('#password').value
      }
      await fetch('http://localhost:3000/user', {
        method: 'POST',
        headers: {
        body: JSON.stringify(user),
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
      }).then((response) => {
        console.log(response);
        console.log(user);

        // if(response === 201){
        //   window.location.assign('crud.html');
        // }else{
        //   console.log('error');
        // }
      });
       
      }catch(error) {
        throw new Error(error);
      }
      console.log("Usuario criado com sucesso");
  }