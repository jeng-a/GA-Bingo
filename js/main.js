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
}

document.getElementById('bingo').addEventListener("click",function(e){
  e.target.classList.toggle("selected");
  e.target.marker = e.target.classList.contains("selected");
  checkForWin();
})

// var words = {
//   'Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit'
// }

function getRandom() {
  return Math.random ();
}

function start() {

}

start();

// function select(e) {
//   e.classList.toggle("selected");
// }
