var playBtn = document.getElementById("playBtn");
var number = document.getElementById("number");
var lostModal = document.getElementById("lostModal");
var spanObject = document.getElementsByClassName("close")[0];
var okBtn = document.getElementById("okBtn");

//collapses the modal by clicking the x
spanObject.onclick = function () {
  lostModal.style.display = "none";
};

//collapses the modal by clicking the OK btn
okBtn.onclick = function () {
  lostModal.style.display = "none";
};

//it hide the modal before the Play btn is click
lostModal.style.display = "none";

function radomNumber() {
  for (var i = 0; i < 30; i++) {
    var numbers = Math.floor(Math.random() * 15000);
    number.innerHTML = "<h3> Your number: " + numbers + "</h3>";
  }
  //   if (numbers < 1 || numbers > 1000) alert("Too bad! You've lost!");
  if (numbers < 1 || numbers > 1000) lostModal.style.display = "block";
  else {
    lostModal.style.display = "none";
  }
}

playBtn.addEventListener("click", radomNumber);



// if (numbers < 1 || numbers > 1000) alert("Too bad! You've lost!");

// var arr = [];
// while(arr.length < 8){
//     var r = Math.floor(Math.random() * 100) + 1;
//     if(arr.indexOf(r) === -1) arr.push(r);
// }
// console.log(arr);

// function randomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// function generate() {
//   document.getElementById('number').innerHTML = "Your number:" + randomNumber(1,100000);
// }

// function generate() {
//   var numbers = [];
//   for (var i = 0; i < 100; i++) {
//     var randomNumber = Math.floor(Math.random() * 100 + 1);
//     // if (randomNumber < 1 || randomNumber > 1000) alert("Too bad! You've lost!");
//     console.log(randomNumber);
//   }
// }
// document.getElementById("number").innerHTML = "Your number:" + number;

// var playBtn = document.getElementById("playBtn");
// // var number = document.getElementById("number");

// function generate() {
//   //   var numbers = [];
//   for (var i = 0; i < 12000; i++) {
//     var randomNumber = Math.floor(Math.random() * 12000 + 1);
//     // if (randomNumber < 1 || randomNumber > 1000)
//     // window.confirm("Too bad! You've lost!");
//     number.innerHTML = "<h3> Your number: " + randomNumber + "</h3>";
//     // console.log(randomNumber);
//   }
// }

// playBtn.addEventListener("click", generate);
