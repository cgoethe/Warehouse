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
  