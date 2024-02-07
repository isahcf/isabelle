function ValidaCampos(){
   
    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;
   
   if(usuario != "isah" && senha != "123456"){
    alert("Usuario ou senha invalidos")
   }else{
    alert("Seja bem-vindo", usuario);
   }
    alert(usuario);
}