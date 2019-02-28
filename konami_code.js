const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];
function init() {
  // your code here
  const body = document.querySelector('body');

  body.addEventListener('keydown', function(e) {
    console.log(e.key);
    key = e.key;
    if(key === 'ArrowUp' || key === 'a'){
      alert('ArrowUp Pressed!');
      console.log('We are hittin');
    }
  });




}
