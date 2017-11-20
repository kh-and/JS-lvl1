window.onload = function () {
/*заполняем div буквами*/
  var letter = ['a','b','c','d','e','f','g','h'];
  var word = document.querySelector('.wordWhite');
    for (wnum = 0; wnum < letter.length; wnum++){
      var wordCell = document.createElement('div');
      word.appendChild(wordCell);
      wordCell.classList.add('wordCell');
      wordCell.innerHTML = letter[wnum];
    }

  var word2 = document.querySelector('.wordBlack');
  for (wnum = 0; wnum < letter.length; wnum++){
    var word2Cell = document.createElement('div');
    word2.appendChild(word2Cell);
    word2Cell.classList.add('wordCell');
    word2Cell.innerHTML = letter[wnum];
  }

/*заполняем div номерами*/
  var number = document.querySelector('.numberWhite');
    for (num = 0; num < letter.length; num++){
      var numCell = document.createElement('div');
      number.appendChild(numCell);
      numCell.classList.add('numCell');
      numCell.innerHTML = letter.length - num;
  }
  var number2 = document.querySelector('.numberBlack');
  for (num = 0; num < letter.length; num++){
    var num2Cell = document.createElement('div');
    number2.appendChild(num2Cell);
    num2Cell.classList.add('numCell');
    num2Cell.innerHTML = letter.length - num;
  }

/*формируем доску*/
  var chessBoard = document.querySelector('.board');
  var i = 0;
    for (count = 0; count < 8 * 8; count++) {
      var cell = document.createElement('div');
      chessBoard.appendChild(cell);
      cell.classList.add('boardCell');

      if (i % 2)
        cell.classList.add('cellBlack');
      i += ((i + 2) % 9) ? 1 : 2;

/*заполняем фигурами*/
      if (count < 16){
      var figureBoardB = document.createElement('img');
      cell.appendChild(figureBoardB);
      figureBoardB.setAttribute('src', 'img/figure/' + (count+1) + '.png');
      }else if ( count > 47) {
        var figureBoardW = document.createElement('img');
        cell.appendChild(figureBoardW);
        figureBoardW.setAttribute('src', 'img/figure/' + (count - 31) + '.png');
      }
    }
};




