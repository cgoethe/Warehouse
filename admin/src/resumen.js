//Logica para ambiar entre tabs

document.getElementById("tab-1").addEventListener("click", function() {
    showSection("tab-1", "section-1");
  });
  
  document.getElementById("tab-2").addEventListener("click", function() {
    showSection("tab-2", "section-2");
  });
  
  function showSection(tabId, sectionId) {
    // Ocultar todas las secciones
    document.querySelectorAll(".tab-content").forEach(function(section) {
      section.style.display = "none";
    });
  
    // Remover la clase 'active' de todos los botones
    document.querySelectorAll(".tab").forEach(function(button) {
      button.classList.remove("tab-selected");
    });
  
    // Mostrar la sección seleccionada
    document.getElementById(sectionId).style.display = "block";
  
    // Agregar la clase 'active' al botón seleccionado
    document.getElementById(tabId).classList.add("tab-selected");
  }




const editArticulo = document.querySelectorAll(".edit-article");
editArticulo.forEach((button) => {
    button.addEventListener("click", () => {
        let popupNode = document.querySelector("#popup-edit-article");
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
})


  