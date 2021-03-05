const body= document.body;
const switchBtn= document.querySelector('.switch')
const paraText=document.querySelector('.color')

switchBtn.addEventListener('click', function(){
let color1=	getRandomNumber();
let color2=	getRandomNumber();
let color3=	getRandomNumber();

let allColor= `rgb(${color1},${color2},${color3})`;
body.style.backgroundColor = allColor;
paraText.innerText= allColor;
})


function getRandomNumber(){
	return Math.floor(Math.random()*256);
}