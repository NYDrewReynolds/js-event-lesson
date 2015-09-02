document.querySelector('.grandparent').addEventListener('click', function (event) {
  console.log('Grandparent');
});

document.querySelector('.parent').addEventListener('click', function (event) {
  console.log('Parent');
});

document.querySelector('#click-me').addEventListener('click', function (event) {
  console.log('Button');
});

document.querySelector('.grandparent').addEventListener('click', function (event) {
  console.log(event.target);
});

document.querySelector('.parent').addEventListener('click', function (event) {
  console.log(event.target);
});

document.querySelector('#click-me').addEventListener('click', function (event) {
  console.log(event.target);
});
