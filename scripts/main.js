const myImage = document.querySelector('img');

myImage.onclick = function() {
    const mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/honoo_hi_fire.png');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
    }
}

const myButton = document.querySelector('button');
const myHeading = document.querySelector('h1');

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  const storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla はすばらしいよ、' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

function setUserName() {
  const myName = prompt('あなたの名前を入力してください.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla はすばらしいよ, ' + myName;
  }
}