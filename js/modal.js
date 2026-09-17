import {Selo,Usuario} from "../js/construtores.js" 

if (localStorage.getItem("Selos") == null){
    localStorage.setItem("Selos",JSON.stringify([]))
} 
function LerSelos (){
        let res = JSON.parse(localStorage.getItem("Selos"))
        return res
        
    }

function SalvarSelos  (x)  {
       let res = JSON.parse(localStorage.getItem("Selos"))
       res.push(x)
       localStorage.setItem("Selos",JSON.stringify(res))
    }
        

if(localStorage.getItem("Users") == null){
    localStorage.setItem("Users", JSON.stringify([]))
}
function LerUsers (){
        let res = JSON.parse(localStorage.getItem("Users"))
        return res
        
    }

function SalvarUsers  (x)  {
       let res = JSON.parse(localStorage.getItem("Users"))
       res.push(x)
       localStorage.setItem("Users",JSON.stringify(res))
    } 


// Get the modal
var modal = document.getElementById("Modal");
var modalConteudo = document.getElementById("M_conteudo")

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}

// area de criar conta-------------------------------------------------------
// Get the button that opens the modal
var btnAddConta = document.getElementById("Add_conta");

// When the user clicks on the button, open the modal
btnAddConta.onclick = function() {
    modal.style.display = "block";
    modalConteudo.innerHTML=
    `
    <p>Nome da conta do youtube</p>
    <input type="text" id="Nome_usuarioYoutube">
    <p>Nome da conta do ZZZ</p>
    <input type="text" id="Nome_usuarioZZZ">
    <button id="Criar_conta">Criar Perfil</button>
    `
    const Criar = document.getElementById("Criar_conta")
    Criar.onclick = function(){
        let NomeYoutube = document.getElementById("Nome_usuarioYoutube").value
        let NomeZZZ = document.getElementById("Nome_usuarioZZZ").value
        let NovoUser = new Usuario(NomeYoutube,NomeZZZ)
        SalvarUsers(NovoUser)
          
    }
}

// area de criar selo----------------------------------------------------
// Get the button that opens the modal
var btnAddConta = document.getElementById("Add_selo");

// When the user clicks on the button, open the modal
btnAddConta.onclick = function() {
    modal.style.display = "block";
    
    modalConteudo.innerHTML=
    `
    <p>Nome do selo</p>
    <input type="text" id="Novo_selo">
    <p>Descrição do selo</p>
    <input type="text" id="Nova_descricao">
    <p>Link da imagem do selo</p>
    <input type="text" id="Nova_imagemSelo">
    <button id="Criar_selo">Criar Selo</button>
    `
    const Criar = document.getElementById("Criar_selo")
    Criar.onclick = function(){
        let NovaNome = document.getElementById("Novo_selo").value
        let NovaDescri = document.getElementById("Nova_descricao").value
        let NovaImagem = document.getElementById("Nova_imagemSelo").value
        let NovoSelo = new Selo(NovaNome,NovaDescri,NovaImagem)
        SalvarSelos(NovoSelo)
         
    }
   
}   




// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
// if (event.target == modal) {
// modal.style.display = "none";
// }
// }
