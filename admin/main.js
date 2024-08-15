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



