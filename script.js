var myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "愛無限樂團2.png") {
    myImage.setAttribute("src", "混障綜藝團.png");
  } else {
    myImage.setAttribute("src", "愛無限樂團2.png" );
  }
};
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");
function setUserName() {
    let myName = prompt("請輸入你的名稱");
    localStorage.setItem("name", myName);
    myHeading.innerHTML = "使用者：" + myName;
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.innerHTML = "使用者： " + storedName;
  }
  
  myButton.onclick = function () {
    setUserName();
  };
  