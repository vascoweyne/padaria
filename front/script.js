/* global fetch */
//const { async } = require("rxjs")
const usr = document.querySelector('#salvar')

usr.addEventListener('click', () => {
  const user = getLoginForm()

  enviarLoginParaApi(user)
})


function getLoginForm(){
  const inputEmail = document.querySelector('#email')
  const inputSenha = document.querySelector('#senha')
  if (inputEmail.value === null || inputSenha === null){
    console.log('campos vazio')
    return;
  }

  const user = {
    email: inputEmail.value,
    senha: inputSenha.value
  }
}

  async function enviarLoginParaApi(user) {
      const resposta = await fetch('http://localhost:3000/user', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
       if(resposta.status === 201){
         limparCampos()
         window.location.href = 'home.html'
       }else{
         console.log('error');
       }
      console.log(resposta);
  }

    function limparCampos(){
        document.querySelector('#email').value = ''
        document.querySelector('#senha').value = ''
    }


    

// function categoria(){
// fetch(`http://localhost:3000/categoria`).then(resposta =>{
//   return resposta.json()
// }).then(corpo=>{
//   console.log(corpo);
// })
// }

// function produto(){
//   fetch(`http://localhost:3000/produto`).then(resposta =>{
//   return resposta.json()
// }).then(corpo=>{
//   console.log(corpo);
// })
// }