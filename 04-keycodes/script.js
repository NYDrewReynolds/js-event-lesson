var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var block = {
  width: 20,
  height: 20,
  x: 190,
  y: 140,
};

document.addEventListener('keydown', function (event) {
  if (event.which === 39){ //right
      block.x ++;
  }else if(event.which === 37){ //left
      block.x --;
  }else if(event.which === 38){ //up
      block.y --;
  }else if(event.which === 40){ //down
      block.y ++;
  }
});

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillRect(block.x, block.y, block.width, block.height);
  requestAnimationFrame(gameLoop);
});

var tf = document.querySelector('#text-field');

tf.addEventListener('keyup', function(event) {
  if(event.keyCode === 65) {
    console.log("A was pressed!");
  }
});
