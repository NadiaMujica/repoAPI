"use strict"
let contenedor = document.getElementById("container");

fetch("https://fakestoreapi.com/products")
    .then(resp => resp.json())
    .then(data =>
        data.forEach(prod => {
            contenedor.innerHTML += `
             <div class="card">
                    <img src="${prod.image}" alt="imagen de producto">
                    <h2>${prod.title}</h2>
                    <h3>Category: ${prod.category}</h3>
                    <h4>$ ${prod.price}</h4>
             </div>`
        })
    )
    .catch(err => console.log(err))