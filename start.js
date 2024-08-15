const user = document.getElementById("username")
const password = document.getElementById("password")
const enterButton = document.getElementById("loggin-button")



enterButton.addEventListener("click", () => {

    if(password.value !== ""){
        if((user.value === "admin" && password.value === "admin")){
            window.location.href = "./admin/resumen.html"
        }else if((user.value === "vendedor" && password.value === "vendedor")){
            window.location.href = "./seller/index.html"
        }else{
            alert("Usuario o contraseña incorrectos")
        }
    }else{
        alert("Ingresa una contraseña")
    }
    

})