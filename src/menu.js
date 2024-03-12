const content = document.querySelector("#content");

let menu = () => {
     content.innerHTML = "";

     const beverages = document.createElement("h1");
     beverages.innerHTML = "Beverages";
     content.appendChild(beverages);

               // Tea

     const tea = document.createElement("h2");
     tea.innerHTML = "Tea";
     tea.classList.add("items");
     content.appendChild(tea);
     const teaDes = document.createElement("p");
     teaDes.classList.add("des");
     teaDes.innerHTML = "Tea is an aromatic beverage made by pouring hot or boiling water over the leaves of the Camellia sinensis plant. The Camellia sinensis plant is an evergreen shrub native to East Asia, probably originating in the borderlands of southwestern China and northern Myanmar.";
     content.appendChild(teaDes);

     // tea image
     const teaImage = document.createElement("img");
     teaImage.src = require("./tea.png");
     teaImage.alt = "Tea";
     teaImage.classList.add("images");
     content.appendChild(teaImage);

                    // Kulhad Tea

     const kulhadTea = document.createElement("h2");
     kulhadTea.innerHTML = "Kulahad Tea";
     kulhadTea.classList.add("items");
     content.appendChild(kulhadTea);
     const kulhadTeaDes = document.createElement("p");
     kulhadTeaDes.classList.add("des");
     kulhadTeaDes.innerHTML = "A Kullad or Kulhad is a traditional clay cup, made like all earthenware, by firing in kiln. The earthen cup tends to soak up a bit of the hot fluids poured into i. So, when you pour hot tea into a Kullad, a bit of the tea soaks into the clay and the two flavours intermingle and what creates the earthy flavour everyone ";
     content.appendChild(kulhadTeaDes);

     // kulhad tea image
     const kulhadTeaImage = document.createElement("img");
     kulhadTeaImage.classList.add("images");
     kulhadTeaImage.src = require("./kulhad.png");
     kulhadTeaImage.alt = "Kulhad Tea";
     content.appendChild(kulhadTeaImage);
}

export default menu;