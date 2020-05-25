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
