// async function pegarApi () {try {
// $.post("http://localhost:3000/categoria", function (data) {}).done(function (
//   data
// ) {
//   data.forEach((element) => {
//     console.log(element);
//     document.querySelector(
//       "#products-list"
//     ).innerHTML += `<li>${element.nome}, ${element.id}</li>`;
//   });
// });
// }catch(error){
//   throw new Error(error);
// }
// }



async function fetchApiDataCategoria(event){
  try{
    event.preventDefault()
    fetch('http://localhost:3000/categoria', {
      method: 'POST',
      headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      body: JSON.stringify(event )
    }
    })
    .then(response => {
      response.json()
      console.log(response.json());


    })
     function coletar(data) {data.forEach((element) => {
      console.log(element);
      document.querySelector("#products-list")
  
    }).innerHTML += `<li>${element.nome}, ${element.id}</li>`;}
  }catch(error) {
    throw new Error(error)
  }
 }