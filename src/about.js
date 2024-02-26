const content = document.querySelector("#content");

let about = () => {
     content.innerHTML = "";

     const contact = document.createElement("h1");
     contact.innerHTML = "Contact";
     content.appendChild(contact);

     const contactMe = document.createElement("h2");
     contactMe.innerHTML = "Abhimanyu Mahto";
     content.appendChild(contactMe);
     const number = document.createElement("p");
     number.innerHTML = "1111111111";
     content.appendChild(number);
}

export default about;