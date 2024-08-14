const user = document.getElementById("username")
const password = document.getElementById("password")
const enterButton = document.getElementById("loggin-button")



enterButton.addEventListener("click", () => {

    if(password.value !== ""){
        user.value === "admin" ? window.location.href = "./admin/index.html" : window.location.href = "./seller/index.html";
    }else{
        alert("Ingresa una contraseña")
    }
    

})