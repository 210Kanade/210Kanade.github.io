const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/khn.jpg") {
    myImage.setAttribute("src", "images/khn2.jpg");
  } else {
    myImage.setAttribute("src", "images/khn.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
if(!myName){
setUserName();
}else{
  localStorage.setItem("name", myName);
  myHeading.textContent = `${myName}`;
}
}


if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `vivid bad street, ${storedName}`;
}
myButton.onclick = () => {
  setUserName();
};