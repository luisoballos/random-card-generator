document.querySelector("body").style.backgroundColor = "green";

let button = document.createElement("button");
button.classList.add("btn", "btn-primary", "d-block", "mx-auto", "my-4");
button.textContent = "Generate";
document.body.appendChild(button);

let card = document.createElement("div")
card.classList.add("card", "bg-light", "rounded-3", "d-block", "mx-auto", "text-center", "fs-1");
document.body.appendChild(card);

function generateRandom() {
  let suits = ["♦", "♥", "♠", "♣"];
  let randomSuit = suits[Math.floor(Math.random() * suits.length)];
  let randomNum = Math.floor(Math.random() * 13) + 1;
  randomNum = randomNum == 1 ? "A"
            : randomNum == 11 ? "J"
            : randomNum == 12 ? "Q"
            : randomNum == 13 ? "K" : randomNum;
  return [randomSuit, randomNum]
}

function generateNewCard() {
  card.innerHTML = "";
  let [suit, number] = generateRandom();
  
  let suitTop = document.createElement("div");
  let suitBottom = document.createElement("div");
  let cardNum = document.createElement("div");
  
  suitTop.textContent = suitBottom.textContent = suit;
  cardNum.textContent = number;

  suitTop.classList.add("card-suit", "top");
  suitBottom.classList.add("card-suit", "bottom");
  cardNum.classList.add("card-number");

  if (suit === "♦" || suit === "♥") {
    suitTop.style.color = "red";
    suitBottom.style.color = "red";
  } else {
    suitTop.style.color = "black";
    suitBottom.style.color = "black";
  }

  card.appendChild(suitTop);
  card.appendChild(suitBottom);
  card.appendChild(cardNum);
}

const style = document.createElement('style');
style.innerHTML = `
.card {
  width: 200px;
  height: 300px;
  position: relative;
  font-size: 30px;
  padding: 10px;
}

.card-suit {
  position: absolute;
  font-size: 1.7em;
}

.card-suit.top {
  top: 10px;
  left: 10px;
}

.card-suit.bottom {
  bottom: 10px;
  right: 10px;
  transform: rotate(180deg);
}

.card-number {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.8em;
  font-weight: bold;
}
`;
document.head.appendChild(style);

let interval = 0;
function startTimer() {
    interval = setInterval(function() {
        generateNewCard();
    }, 2000);
}

window.onload = function () {
  generateNewCard();
  button.addEventListener("click", generateNewCard);
  startTimer();
};