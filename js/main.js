var squares = document.querySelectorAll('td');
squares.forEach((square) => {
  square.innerText = generate()
});

function checkForWin() {
    var t = document.getElementById('bingo');
    if ((t.rows[0].cells[0].marker & t.rows[0].cells[1].marker & t.rows[0].cells[2].marker & t.rows[0].cells[3].marker)
    || (t.rows[1].cells[0].marker & t.rows[1].cells[1].marker & t.rows[1].cells[2].marker & t.rows[1].cells[3].marker)
    || (t.rows[2].cells[0].marker & t.rows[2].cells[1].marker & t.rows[2].cells[2].marker & t.rows[2].cells[3].marker)
    || (t.rows[3].cells[0].marker & t.rows[3].cells[1].marker & t.rows[3].cells[2].marker & t.rows[3].cells[3].marker)
    || (t.rows[0].cells[0].marker & t.rows[1].cells[0].marker & t.rows[2].cells[0].marker & t.rows[3].cells[0].marker)
    || (t.rows[0].cells[1].marker & t.rows[1].cells[1].marker & t.rows[2].cells[1].marker & t.rows[3].cells[1].marker)
    || (t.rows[0].cells[2].marker & t.rows[1].cells[2].marker & t.rows[2].cells[2].marker & t.rows[3].cells[2].marker)
    || (t.rows[0].cells[3].marker & t.rows[1].cells[3].marker & t.rows[2].cells[3].marker & t.rows[3].cells[3].marker)
    || (t.rows[0].cells[0].marker & t.rows[1].cells[1].marker & t.rows[2].cells[2].marker & t.rows[3].cells[3].marker)
    || (t.rows[0].cells[3].marker & t.rows[1].cells[2].marker & t.rows[2].cells[1].marker & t.rows[3].cells[0].marker)
  ){
	youWin();
    }
  //   else {
	// youLose();
  //   }
  }

function youWin() {
  var winMessage = document.getElementById('winMessage');
  winMessage.style.display = "block";
  var reset = document.getElementById('reset');
  reset.style.display = "block";
}

document.getElementById('bingo').addEventListener("click",function(e){
  e.target.classList.toggle("selected");
  e.target.marker = e.target.classList.contains("selected");
  checkForWin();
})

function select(e) {
  e.classList.toggle("selected");
}

var words = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'
];

function generate() {
  var gathing = words[Math.floor(Math.random () * words.length)];
  remove(words, gathing);
  console.log(words.length, words);
  return gathing;
}

function remove(array, element) {
    const index = array.indexOf(element);

    if (index !== -1) {
        array.splice(index, 1);
    }
}

// function start() {
//
// }
//
// start();
