const content = document.querySelector("#content");

let menu = () => {
     content.innerHTML = "";

     const restaurant = document.createElement("h1");
     restaurant.innerHTML = "Menu";
     content.appendChild(restaurant);

     const beverages = document.createElement("h2");
     beverages.innerHTML = "Beverages";
     content.appendChild(beverages);

     const tea = document.createElement("h2");
     tea.innerHTML = "Tea";
     content.appendChild(tea);
     const teaDes = document.createElement("p");
     teaDes.innerHTML = "Tea is an aromatic beverage made by pouring hot or boiling water over the leaves of the Camellia sinensis plant. The Camellia sinensis plant is an evergreen shrub native to East Asia, probably originating in the borderlands of southwestern China and northern Myanmar.";
     content.appendChild(teaDes);

     const kulhadTea = document.createElement("h2");
     kulhadTea.innerHTML = "Kulahad Tea";
     content.appendChild(kulhadTea);
     const kulhadTeaDes = document.createElement("p");
     kulhadTeaDes.innerHTML = "A Kullad or Kulhad is a traditional clay cup, made like all earthenware, by firing in kiln. The earthen cup tends to soak up a bit of the hot fluids poured into i. So, when you pour hot tea into a Kullad, a bit of the tea soaks into the clay and the two flavours intermingle and what creates the earthy flavour everyone ";
     content.appendChild(kulhadTeaDes);

}

export default menu;