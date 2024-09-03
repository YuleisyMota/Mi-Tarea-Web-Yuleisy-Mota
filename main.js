// creo una funcion que se ejecutara cuando hago click en el boton
function muestra_oculta(id) {

    let div = document.getElementById(id);
    if (div.style.display == "none") {
       div.style.display = "flex"; 
    } else {
        div.style.display = "none";
    }

}
    
    
          
    