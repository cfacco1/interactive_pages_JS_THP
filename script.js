// Fonctionnalité 1 

var myFooter = document.getElementsByTagName('footer')[0];
function onFoorterClick() { 
    console.log('clique');
}

myFooter.addEventListener("click", onFoorterClick);

// Fonctionnalité 1 bis

var myFooter = document.querySelector('footer');
var x=1;
function onFoorterClick() { 
    console.log('clic numéro '+ x);
    x++
}

myFooter.addEventListener("click", onFoorterClick);

// Fonctionnalité 2

var menuHamb = document.querySelector('button');
var navbarHeader = document.getElementById('navbarHeader');
menuHamb.addEventListener("click", toggleOn); 

function toggleOn() {
    navbarHeader.classList.toggle("collapse");
};

//Fonctionnalité 3

var redbutton = document.getElementsByClassName('btn btn-sm btn-outline-secondary')[0];


redbutton.addEventListener('click', putRedText);

function putRedText() {
    var cardChange = document.querySelector('p.card-text');
    cardChange.style.color = 'red';
}

//Fonctionnalité 4

var greenbutton = document.querySelectorAll('div.btn-group')[1].children[1]; 
greenbutton.addEventListener('click', putGreenText1);

var statusButton = false; 
function putGreenText1() {
    var cardChange2 = document.querySelectorAll('p.card-text');  
    if (statusButton) {             
        statusButton = false;
        cardChange2[1].style.color = '';
    } else {                        
        statusButton = true;
        cardChange2[1].style.color = 'green';
    }
}

//Fonctionnalité 5

var cdnBootstrap = document.getElementsByTagName('link')[0];
var doubleClicNavbar = document.querySelector('header');
var headTag = document.querySelector('head');
var statusHeader = false;

var changeCDN = function () {
  if (statusHeader == false) {
    cdnBootstrap.parentNode.removeChild(cdnBootstrap);
    statusHeader = true;
  } else if (statusHeader == true) {
    headTag.appendChild(cdnBootstrap);
    statusHeader= false;
  }
};

doubleClicNavbar.addEventListener('dblclick', changeCDN);