// function getLoginForm(){
//   const inputEmail = document.querySelector('#email')
//   const inputSenha = document.querySelector('#senha')
//   if (inputEmail.value === null || inputSenha === null){
//     console.log('campos vazio')
//     return;
//   }

  


  async function enviarLoginParaApi(event) {
    try{
      event.preventDefault();
      const user = {
        email: inputEmail.value,
        senha: inputSenha.value
      }
      const resposta = await fetch('http://localhost:3000/user', {
        method: 'POST',
        headers: {
        body: JSON.stringify(user),
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
      })
       if(resposta.status === 201){
         limparCampos()
         window.location.href = 'home.html'
       }else{
         console.log('error');
       }
      }catch(error) {
        throw new Error(error);
      }

      console.log("Usuario criado com sucesso");
      
  }

    // function limparCampos(){
    //     document.querySelector('#email').value = ''
    //     document.querySelector('#senha').value = ''
    // }