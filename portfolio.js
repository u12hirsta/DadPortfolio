var imgArray = new Array();
imgArray[0] = new Image();
imgArray[0].src = 'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg';
imgArray[1] = new Image();
imgArray[1].src = 'http://via.placeholder.com/350x150';
var i = 0;
function nextImage(element) {
  var img = document.getElementById(element);
  while(i<=imgArray.length-1){
    if(i == imgArray.length-1){
      document.getElementById(element).src = imgArray[0].src;
      i = 0;
      break;
    }else {
      document.getElementById(element).src = imgArray[i+1].src;
      i++;
      break;
    }
  }
}
