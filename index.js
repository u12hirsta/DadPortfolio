
document.getElementById("btnClose").onclick = function(){
  if(document.getElementById("sidenav").style.display == 'none'){
    document.getElementById("sidenav").style.display = 'block';
    document.getElementsByClassName("sideButton")[0].style.right = '80px';
    document.getElementsByClassName("sideButton")[0].style.background = 'none';
  }else {
    document.getElementById("sidenav").style.display = 'none';
    document.getElementsByClassName("sideButton")[0].style.right = '10px';
    document.getElementsByClassName("sideButton")[0].style.background = 'rgba(0, 200, 255, 0.7)';
  }
}
