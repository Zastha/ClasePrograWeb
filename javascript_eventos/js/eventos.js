let elemento = document.querySelector("#elemento");
let agregar = document.querySelector("#agregar");
let lista = document.querySelector("#listadinamica");
elemento.focus();



agregar.addEventListener("click",()=> {

    if(elemento.value.trim() != ""){
        let nuevoelemento=document.createElement("li");
        nuevoelemento.innerText = elemento.value;
        lista.appendChild(nuevoelemento);
        elemento.value="";
        
    }
});


elemento.addEventListener("keydown",(e)=>{
    if(e.key == "Enter"){
        agregar.click();
    }
})

//Arrastrar y soltar
let arrastra = document.querySelector("#arrastra");
let zonasoltar = document.getElementById("zonasoltar");
let texto=document.querySelector(".texto");

arrastra.addEventListener("dragstart",function(e){
    this.style.border = "5px solid red";
} )

zonasoltar.addEventListener("dragover", function(e){
    //zonasoltar olvida que no se pueden
    //arastrar elementos sobre el
    event.preventDefault();
})

zonasoltar.addEventListener("drop", function(e){
    arrastra.style.border="none";
    texto.style.display="none";
    this.append(arrastra);
})


zonainicial.addEventListener("dragover", function(e){
    //zonasoltar olvida que no se pueden
    //arastrar elementos sobre el
    event.preventDefault();
})

zonainicial.addEventListener("drop", function(e){
    arrastra.style.border="none";
    texto.style.display="none";
    this.append(arrastra);
})

