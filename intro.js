let btn = document.querySelector("button");
const uscore=document.querySelector("#user-score");
const cscore = document.querySelector("#comp-score");
const msgc=document.querySelector(".msg-container");
//-----------------------------------
//--------change-background--------
let bg = document.getElementsByTagName("BODY")[0];
let heading1 = document.getElementsByTagName("h1")[0];
let heading2 = document.getElementsByTagName("h3")[0];
let mode = "white";
btn.onclick = () => {
  if (mode === "white") {
    mode = "grey";
    bg.setAttribute("class", "nbg");
    heading1.setAttribute("class", "hdd");
    heading2.setAttribute("class", "hdd2");
  } else {
    mode = "white";
    bg.setAttribute("class", "bg");
    heading1.setAttribute("class", "hdl");
    heading2.setAttribute("class", "hdl2");
  }
};
//-----------------------------------
let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".box");

const playGame = (userChoice, cmpChoice) => {
  console.log("Your choice is", userChoice);
  console.log("Cmp choice is", cmpChoice);
  if (result(userChoice, cmpChoice) === true) {
    uscore.innerText=++userscore;
    msgc.style.backgroundColor = "#66ff99";
    msg.innerText =
      `You are Win (Your ${userChoice} beats ${cmpChoice})`;
  } else if (result(userChoice, cmpChoice) === false) {
    cscore.innerText = ++compscore;
    msgc.style.backgroundColor = "#ff6666";
    msg.innerText = `You Lost ( ${cmpChoice} beats your ${userChoice})`;
  } else {
    msgc.style.backgroundColor = "#ff9900";
   
    msg.innerText = `OPS Draw!! Try Again`;
    
  }
};

choices.forEach((choice) => {
  choice.onclick = () => {
    const userChoice = choice.getAttribute("id");
    const cmpChoice = computer();
    playGame(userChoice, cmpChoice);
  };
});

function computer() {
  const options = ["rock", "paper", "scissor"];
  const indx = Math.floor(Math.random() * 3);
  return options[indx];
}

function result(userChoice, cmpChoice) {
  if (userChoice === cmpChoice) {
    console.log("match is drawn");
  } else {
    let userWin = true;
    if (userChoice == "rock") {
      cmpChoice === "paper" ? (userWin = false) : (userWin = true);
    } else if (userChoice == "paper") {
      cmpChoice === "scissor" ? (userWin = false) : (userWin = true);
    } else if (userChoice == "scissor") {
      cmpChoice === "rock" ? (userWin = false) : (userWin = true);
    }
    return userWin;
  }
}
