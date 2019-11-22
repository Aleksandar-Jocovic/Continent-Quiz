let possibleAns = [
  "Africa",
  "Asia",
  "South America",
  "North America",
  "Europe",
  "Oceania",
  "Antarctica"
];

let jsonQuestions = [
  { image: "https://i.imgur.com/upu7gMJ.jpg", continent: "Antarctica" },
  { image: "https://i.imgur.com/E7n3P77.jpg", continent: "Antarctica" },
  { image: "https://i.imgur.com/4WgoutD.jpg", continent: "Antarctica" },
  { image: "https://i.imgur.com/rYohooR.jpg", continent: "Antarctica" },
  { image: "https://i.imgur.com/BlrmuXu.jpg", continent: "Antarctica" },
  { image: "https://i.imgur.com/1UINvo8.jpg", continent: "Oceania" },
  { image: "https://i.imgur.com/vWlrNXk.jpg", continent: "Oceania" },
  { image: "https://i.imgur.com/rljU60z.jpg", continent: "Oceania" },
  { image: "https://i.imgur.com/ybRJKnu.jpg", continent: "Oceania" },
  { image: "https://i.imgur.com/zZsesJy.jpg", continent: "Oceania" },
  { image: "https://i.imgur.com/sgqoWwV.jpg", continent: "Europe" },
  { image: "https://i.imgur.com/EdNkLW8.jpg", continent: "Europe" },
  { image: "https://i.imgur.com/sczp9om.jpg", continent: "Europe" },
  { image: "https://i.imgur.com/3uSLMKy.jpg", continent: "Europe" },
  { image: "https://i.imgur.com/xG8dgTl.jpg", continent: "Europe" },
  { image: "https://i.imgur.com/M17BhGr.jpg", continent: "North America" },
  { image: "https://i.imgur.com/7Hm4BDz.jpg", continent: "North America" },
  { image: "https://i.imgur.com/BWwPYCI.jpg", continent: "North America" },
  { image: "https://i.imgur.com/eYQXGwb.jpg", continent: "North America" },
  { image: "https://i.imgur.com/AMVT31C.jpg", continent: "North America" },
  { image: "https://i.imgur.com/nooVXqp.jpg", continent: "South America" },
  { image: "https://i.imgur.com/nLUAr4P.jpg", continent: "South America" },
  { image: "https://i.imgur.com/KV7vPYG.jpg", continent: "South America" },
  { image: "https://i.imgur.com/e73FhAl.jpg", continent: "South America" },
  { image: "https://i.imgur.com/hYlVyom.jpg", continent: "South America" },
  { image: "https://i.imgur.com/erOrAn4.jpg", continent: "Asia" },
  { image: "https://i.imgur.com/RVowloS.jpg", continent: "Asia" },
  { image: "https://i.imgur.com/NPSlyqL.jpg", continent: "Asia" },
  { image: "https://i.imgur.com/khi8hGD.jpg", continent: "Asia" },
  { image: "https://i.imgur.com/VcIFY35.jpg", continent: "Asia" },
  { image: "https://i.imgur.com/nWK7Jlh.jpg", continent: "Africa" },
  { image: "https://i.imgur.com/GYJlsrp.jpeg", continent: "Africa" },
  { image: "https://i.imgur.com/QBo4Huk.jpg", continent: "Africa" },
  { image: "https://i.imgur.com/G1kpBhT.jpg", continent: "Africa" },
  { image: "https://i.imgur.com/FlaF0bx.jpg", continent: "Africa" }
];

// parsed questioins
let questions = JSON.parse(JSON.stringify(jsonQuestions));

let userScore = 0;
// arr to store 35 nums to chose 5 rand no repeat
let arr = [];
// count questions
let counter = 0;
// count games
let gamesCount = 0;

var data = localStorage.getItem("continentQuiz")
  ? JSON.parse(localStorage.getItem("continentQuiz"))
  : {
      objArr: [
        { sc: "0", dt: ". . ." },
        { sc: "0", dt: ". . ." },
        { sc: "0", dt: ". . ." }
      ]
    };
// get date store it in today var   
var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();
today = mm + "." + dd + "." + yyyy;

// call dateScore fun to display previous scores
window.onload = dateScore();

const randomNum = num => {
  return Math.floor(Math.random() * num);
};

// arr 1-35
for (let i = 0; i < 35; i++) {
  arr[i] = i;
}

// 5random index
let fiveIndex = [];
function ranF() {
  for (let i = 0; i < 5; i++) {
    fiveIndex[i] = arr.splice(randomNum(arr.length), 1);
  }
}
ranF();

//////////////////////////////////////////////////
const rendQuestion = () => {
  // if five question are displayed end game
  if (counter > 4) {
    nextToResultP();
  }
  var trueAnsw = questions[fiveIndex[counter][0]].continent;
  // get img
  var questionImg = questions[fiveIndex[counter][0]].image;
  
  document.getElementById("img").src = questionImg;

  let possibleAns = [
    "Africa",
    "Asia",
    "South America",
    "North America",
    "Europe",
    "Oceania",
    "Antarctica"
  ];

  //generate two diferrent false answ
  let falseN = possibleAns.indexOf(trueAnsw) - 1;
  let falseJ = possibleAns.indexOf(trueAnsw) - 3;
  if (falseN < 0) {
    falseN += 2;
  }
  if (falseJ < 0) {
    falseJ += 5;
  }

  let falseOne = possibleAns[falseN];
  let falseTwo = possibleAns[falseJ];
  let arrBtn = [trueAnsw, falseOne, falseTwo];

  document.getElementById("0").innerText = arrBtn.splice(
    randomNum(arrBtn.length),
    1
  );
  document.getElementById("1").innerText = arrBtn.splice(
    randomNum(arrBtn.length),
    1
  );
  document.getElementById("2").innerText = arrBtn.splice(
    randomNum(arrBtn.length),
    1
  );

  // question progress
  let pageProgress = document.getElementById("questionProgress");
  pageProgress.innerHTML = `Question ${counter + 1} of 5`;

  let choice;
  // code to be able to call nested function
  this.okkk = function(id) {
    choice = document.getElementById(id);
  }.bind(this);
  // check answer
  let btnArr = document.getElementsByClassName("answerBtn");
  for (let i = 0; i < btnArr.length; i++) {
    btnArr[i].addEventListener("click", function() {

      if (choice.innerText === trueAnsw) {
        userScore += 750;
        console.log(userScore);
        choice.classList.add("greenGl");
      } else choice.classList.add("redGl");

      for (let i = 0; i < 3; i++) {
        var elOne = document.getElementById(i),
          elClone = elOne.cloneNode(true);
        elOne.parentNode.replaceChild(elClone, elOne);
      }
    });
  }
  // incerments counter
  counter++;
  removeGlow();
};
//end of rend fun
//////////////////////////////////
function removeGlow() {
  document.getElementById('0').classList.remove('greenGl','redGl')
  document.getElementById('1').classList.remove('greenGl','redGl')
  document.getElementById("2").classList.remove("greenGl", "redGl")
}

///////////////// user part
//display scores on finish page of the game
function finishPageScr() {
  let _userScore = document.getElementById("finalScore");
  _userScore.innerHTML = `${userScore} pts`;
}

//moving pages on buttons
const questionPage = document.getElementById("questionPage");
const homePage = document.getElementById("homePage");
const resultP = document.getElementById("resultPage");

const playToQuestionP = () => {
  counter = 0;
  userScore = 0;
  rendQuestion();
  homePage.classList.add("invisible");
  questionPage.classList.remove("invisible");
};

const nextToResultP = () => {
  questionPage.classList.add("invisible");
  resultP.classList.remove("invisible");
  finishPageScr();
};

const finishToPlayP = () => {
  resultP.classList.add("invisible");
  homePage.classList.remove("invisible");
  dateScore();
  ranF();
};

// fun to display score and date
function dateScore() {
  let obj = {
    sc: 0,
    dt: ". . ."
  };
  obj.dt = today;
  obj.sc = userScore;

  data.objArr.push(obj);

  data.objArr.sort((a, b) => (a.sc > b.sc ? -1 : 1)); //? 1 : -1
  if (data.objArr.length > 4) {
    data.objArr.pop();
  }

  document.getElementById("scoreOne").innerText = `${data.objArr[0].sc} pts`;
  document.getElementById("dateOne").innerText = data.objArr[0].dt;

  document.getElementById("scoreTwo").innerText = `${data.objArr[1].sc} pts`;
  document.getElementById("dateTwo").innerText = data.objArr[1].dt;

  document.getElementById("scoreThree").innerText = `${data.objArr[2].sc} pts`;
  document.getElementById("dateThree").innerText = data.objArr[2].dt;

  localStorage.setItem("continentQuiz", JSON.stringify(data));
}

//  buton to clear scores
const clearScores = () => {
  localStorage.clear();
  data.objArr.length = 0;

  data.objArr.unshift(
    { sc: "0", dt: ". . ." },
    { sc: "0", dt: ". . ." },
    { sc: "0", dt: ". . ." }
  );

  document.getElementById("scoreOne").innerText = 0 + " pts";
  document.getElementById("dateOne").innerText = ". . .";

  document.getElementById("scoreTwo").innerText = 0 + " pts";
  document.getElementById("dateTwo").innerText = ". . .";

  document.getElementById("scoreThree").innerText = 0 + " pts";
  document.getElementById("dateThree").innerText = ". . .";
};

// to do get question ajax request
