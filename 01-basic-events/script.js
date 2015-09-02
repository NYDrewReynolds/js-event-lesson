var dontClickMeButton = document.querySelector('#dont-click-me');
var pleaseClickMeButton = document.querySelector('#please-click-me');

dontClickMeButton.addEventListener('click', function fireAlert() {
  alert('I asked you very nicely not to click the button.');
});


var buttons = document.getElementsByTagName('button');

for(var i = 0; i < buttons.length; i++){
  buttons[i].addEventListener('click', function() {
    console.log("You clicked one of the buttons!");
  });
}
