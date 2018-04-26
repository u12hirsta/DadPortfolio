
document.getElementById("btnClose").onclick = function(){
  if(document.getElementById("sidenav").style.display == 'none'){
    document.getElementById("sidenav").style.display = 'block';
    document.getElementsByClassName("sideButton")[0].style.right = '125px';
    document.getElementById("arrow").className = "fa fa-arrow-right";
  }else {
    document.getElementById("sidenav").style.display = 'none';
    document.getElementsByClassName("sideButton")[0].style.right = '0';
    document.getElementById("arrow").className = "fa fa-arrow-left";
  }
}
