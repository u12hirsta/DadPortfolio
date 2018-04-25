
document.getElementById("btnClose").onclick = function(){
  if(document.getElementById("sidenav").style.display == 'none'){
    document.getElementById("sidenav").style.display = 'block';
    document.getElementsByClassName("sideButton")[0].style.right = '98px';
    document.getElementsByClassName("sideButton")[0].style.background = 'none';
    document.getElementById("arrow").className = "fa fa-arrow-right";
  }else {
    document.getElementById("sidenav").style.display = 'none';
    document.getElementsByClassName("sideButton")[0].style.right = '10px';
    document.getElementsByClassName("sideButton")[0].style.background = 'rgba(0, 200, 255, 0.7)';
    document.getElementById("arrow").className = "fa fa-arrow-left";
  }
}
