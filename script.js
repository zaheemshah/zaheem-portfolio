```javascript
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", ()=>{

    navLinks.classList.toggle("active");

});

/* CONTACT FORM */

document.querySelector(".contact-form").addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("Message Sent Successfully 🔥");

});
```
