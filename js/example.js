var greeting ='Howdy';
var name1 = 'Molly';
var message = ', please check your order';
var welcome = greeting + name1 + message;
var sign = 'Montague House';
var tiles = sign.length;
var subTotal = tiles *5;
var shipping =7;
var grandTotal = subTotal + shipping;
var el = document.getElementById( 'greeting');
el.textContent = welcome;
var elSign = document.getElementById( 'userSign');
elSign.textContent = sign;
var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;
var elsubTotal = document.getElementById('subTotal');
elsubTotal.textContent = '$'+ subTotal;
var elShip = document.getElementById( 'shipping');
elShip.textContent = shipping;
var elGrandTotal =document.getElementById('grandTotal');
elGrandTotal.textContent ='$' + grandTotal;


