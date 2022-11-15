function categoria(){

fetch(`http://localhost:3000/categoria`).then(resposta =>{
  return resposta.json()
}).then(corpo=>{
  console.log(corpo);
})
}

function produto(){
  fetch(`http://localhost:3000/produto`).then(resposta =>{
  return resposta.json()
}).then(corpo=>{
  console.log(corpo);
})
}

// function usuario(){
//   fetch(`http://localhost:3000/user`).then(resposta =>{
//   return resposta.json()
// }).then(corpo=>{
//   console.log(corpo);
// })
// }