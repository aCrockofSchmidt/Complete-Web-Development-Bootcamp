let randomNumber1 = Math.floor((Math.random() * 6) + 1);
let randomNumber2 = Math.floor((Math.random() * 6) + 1);
let selectedNumbers = [];

function randomNumbers() {
    for (i = 1; i < 7; i++) {
        if (i === randomNumber1) {
            let firstDie = "./images/dice" + i + ".png";
            let firstClass = document.querySelector(".img1");
            firstClass.setAttribute("src", firstDie);
            selectedNumbers.push(i);
        }
    }

    for (j = 1; j < 7; j++) {

        if (j === randomNumber2) {
            let secondDie = "./images/dice" + j + ".png";
            let secondClass = document.querySelector(".img2");
            secondClass.setAttribute("src", secondDie);
            selectedNumbers.push(j);
        }
    }
    return selectedNumbers
}

let returnedNumbers = randomNumbers();
console.log( returnedNumbers);

if (returnedNumbers[0] > returnedNumbers[1]) {
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!"
}
else if (returnedNumbers[0] < returnedNumbers[1]) {
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩!"
}
else {
    document.querySelector("h1").textContent = "🚩 Draw! 🚩"
}

