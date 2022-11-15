$.get("http://localhost:3000/produto", function (data) {}).done(function (
  data
) {
  data.forEach((element) => {
    console.log(element);
    document.querySelector(
      "#products-list"
    ).innerHTML += `<li>${element.nome}, ${element.id}</li>`;
  });
});