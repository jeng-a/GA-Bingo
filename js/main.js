var words = [
  'Party parrot!',
  'Security stops you at the door',
  'ICE CREAM!',
  "Someone can't eat ice cream",
  'Someone is online shopping',
  'Someone falls asleep',
  'Someone is on Facebook',
  'Someone asks to borrow a laptop charger',
  'Someone asks to borrow a phone charger',
  'Someone sneezes',
  'Someone coughs',
  'Someone gets KFC during the break',
  "Tutor uses 'inspect'",
  'Tutor uses BBC as an example',
  'Tutor uses Ling Cars as an example',
  'Tutor uses The Guardian as an example',
  'EVACUATION?',
  'CodePen',
  'Exercise shared through Slack',
  'Free food in the kitchen',
];

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

var button = document.getElementById('reset');
