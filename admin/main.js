const userRol = document.getElementsByClassName("user-rol")[0]
const userToolTip = document.getElementsByClassName("user-tooltip")[0]

const sideBar = document.getElementsByClassName("sidebar")[0]
const hamburgerSidebar = document.getElementsByClassName("menu-icon")[0]
const closeSidebar = document.getElementsByClassName("close")[0]



userRol.addEventListener("click", () => {

    if(userToolTip.style.display === "block"){
        userToolTip.style.display = "none"
    }else{
        userToolTip.style.display = "block"
    }
})

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



