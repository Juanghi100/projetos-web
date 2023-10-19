const turnOn = document.getElementById('turnOn');
const turnOff =document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

turnOn.addEventListener('click', lampOn);
lamp.addEventListener('mouseover',lampOn);

turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseleave',lampOff);

lamp.addEventListener('dblclick', lampBroken)


function lampOn(){
    
    lamp.src = './img/ligada.jpg'
}

function lampOff (){
lamp.src ='./img/desligada.jpg'
}

function lampBroken(){
    lamp.src = './img/quebrada.jpg'
}

function isLampBroken(){
    return lamp.src.indexOf ('quebrada') > -1

}