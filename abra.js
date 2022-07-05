function sort(){
  var numerodDaSort = Math.floor(Math.random() * 200)

  if(numerodDaSort >= 180){
    document.getElementById("abra").style.display = "block"
    document.getElementById("fotoDePerfil").style.display = "none"
    document.getElementById("perfil").style.background = "none"
  }
}