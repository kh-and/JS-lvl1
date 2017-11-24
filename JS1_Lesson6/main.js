window.onload = function (){
 smallImage();
 bigImg();
};

function smallImage() {
  var smallImg = document.querySelector('.smallImg');
  for (num = 1; num <= 5; num++) {
    var img = document.createElement('img');
    smallImg.appendChild(img);
    img.classList.add('image');
    img.setAttribute('src', 'img/small/' + num + '.jpg');
  }
}


function bigImg() {
  var big = document.getElementsByClassName('image');
  for (i = 0; i < big.length; i++) {
    big[i].onclick = changePicture;
  }


  function changePicture(event) {
    var bigImg = document.getElementById('bigImage');
    bigImg.innerHTML = "";
    var smallSrc = event.target.getAttribute('src');
    var bigCreate = document.createElement('img');
    bigCreate.classList.add('bigCreate');
    bigCreate.src = smallSrc.replace('small', 'big');
    bigImg.appendChild(bigCreate);

  }

}

