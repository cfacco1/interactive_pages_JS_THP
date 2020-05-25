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