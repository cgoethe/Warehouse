const userRol = document.getElementsByClassName("user-rol")[0]
const userToolTip = document.getElementsByClassName("user-tooltip")[0]

const sideBar = document.getElementsByClassName("sidebar")[0]
const hamburgerSidebar = document.getElementsByClassName("menu-icon")[0]
const closeSidebar = document.getElementsByClassName("close")[0]



// Función para manejar el cierre del tooltip
function closeToolTip(event) {
    if (!userToolTip.contains(event.target) && event.target !== userRol) {
        userToolTip.style.display = "none";
        document.removeEventListener('click', closeToolTip); // Remueve el listener después de cerrar el tooltip
    }
}

// Evento para mostrar o esconder el tooltip
userRol.addEventListener("click", (event) => {
    event.stopPropagation(); // Evita que el clic en el botón cierre inmediatamente el tooltip
    
    if (userToolTip.style.display === "block") {
        userToolTip.style.display = "none";
        document.removeEventListener('click', closeToolTip);
    } else {
        userToolTip.style.display = "block";
        document.addEventListener('click', closeToolTip);
    }
});



//Abhrir sidebar
hamburgerSidebar.addEventListener("click", () => {


    if(sideBar.style.display === "block"){
        sideBar.style.display = "none";

    }else{
        sideBar.style.display = "block"
    }
})

//CErrar sidebar
closeSidebar.addEventListener("click", () => {


    if(sideBar.style.display === "block"){
        sideBar.style.display = "none";
        
    }else{
        sideBar.style.display = "block"
    }
})



const changeLocationBtn = document.querySelector("#changeLocation");
//Modal de cambiar sede
changeLocationBtn.addEventListener("click",() => {
    let popupNode = document.querySelector("#popup");
    let overlay = popupNode.querySelector(".overlay");
    let closeBtn = popupNode.querySelector(".close-btn");
    let submitBtn = popupNode.querySelector(".submit-btn");

    function openPopup(){
        popupNode.classList.add("active")
    }

    
    function closePopup(){
        popupNode.classList.remove("active")
    }

    //Events to close popup when it's opened
    overlay.addEventListener("click", closePopup);
    closeBtn.addEventListener("click", closePopup);
    submitBtn.addEventListener("click", closePopup);

    return openPopup();
})


//Modal de editar usuario
const editUserBtn = document.querySelector("#editUser");
editUserBtn.addEventListener("click",() => {
    let popupNode = document.querySelector("#popup-user");
    let overlay = popupNode.querySelector(".overlay");
    let closeBtn = popupNode.querySelector(".close-btn");
    let submitBtn = popupNode.querySelector(".submit-btn");

    function openPopup(){
        popupNode.classList.add("active")
    }

    
    function closePopup(){
        popupNode.classList.remove("active")
    }

    //Events to close popup when it's opened
    overlay.addEventListener("click", closePopup);
    closeBtn.addEventListener("click", closePopup);
    submitBtn.addEventListener("click", closePopup);

    return openPopup();
})


//Desplegar lista de opciones en celda
document.addEventListener("click", function(event) {
    // Ocultar cualquier popup abierto
    document.querySelectorAll(".options-popup").forEach(function(popup) {
      popup.style.display = "none";
    });

    // event.target se refiere al elemento en el que el usuario hizo clic.
    // Mostrar el popup si se hizo click en los 3 puntos
    if (event.target.classList.contains("dots")) {
        
    //event.target.nextElementSibling selecciona el siguiente elemento hermano (sibling) del elemento clicado,
      event.target.nextElementSibling.style.display = "block";
      //Este método evita que el evento de clic se propague a otros elementos del DOM
      event.stopPropagation();
    }
  });
  
  // Evitar que el clic dentro del popup cierre el popup
  document.querySelectorAll(".options-popup").forEach(function(popup) {
    popup.addEventListener("click", function(event) {
      event.stopPropagation();
    });
  });
  

  //Desplegar cantidad de stock de articulos en todas las sedes
document.addEventListener("click", function(event) {
    // Ocultar cualquier popup abierto
    document.querySelectorAll(".cantidad-popup").forEach(function(popup) {
      popup.style.display = "none";
    });

    // event.target se refiere al elemento en el que el usuario hizo clic.
    // Mostrar el popup si se hizo click en los 3 puntos
    if (event.target.classList.contains("flecha-abajo-cantidad")) {
        
    //event.target.nextElementSibling selecciona el siguiente elemento hermano (sibling) del elemento clicado,
      event.target.nextElementSibling.style.display = "block";
      //Este método evita que el evento de clic se propague a otros elementos del DOM
      event.stopPropagation();
    }
  });
  
  // Evitar que el clic dentro del popup cierre el popup
  document.querySelectorAll(".cantidad-popup").forEach(function(popup) {
    popup.addEventListener("click", function(event) {
      event.stopPropagation();
    });
  });


