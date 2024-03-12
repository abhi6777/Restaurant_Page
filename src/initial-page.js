const content = document.querySelector("#content");

let home = () => {
     content.innerHTML = "";

     const restaurant = document.createElement("h1");
     restaurant.innerHTML = "Eat Fresh";
     content.appendChild(restaurant);

     // Truck Image
     const foodTruck = document.createElement("img");
     foodTruck.src = require("./foodTruck.png");
     foodTruck.alt = "hello working";
     foodTruck.classList.add("FoodTruck");
     content.appendChild(foodTruck);

     const intro = document.createElement('p');
     intro.innerHTML = "Welcome to EatFresh, your one-stop shop for all things delicious. We offer a wide variety of dishes from all over the world, so you're sure to find something to your taste. Whether you're in the mood for a classic burger or something more adventurous, we've got you covered.";
     intro.classList.add("intro");
     content.appendChild(intro);

     const timing = document.createElement("h2");
     timing.innerHTML = "Hours";
     content.appendChild(timing);

     const timingDetails = document.createElement("p");
     let detail = "EveryDay 9AM TO 9PM";
     timingDetails.innerHTML = detail;

     content.appendChild(timingDetails);

     const location = document.createElement('h2');
     location.innerHTML = "Location";
     content.appendChild(location);

     const address = document.createElement("p");
     address.innerHTML = "Rajdah, surat, hawrah";
     content.appendChild(address);
}

export default home;