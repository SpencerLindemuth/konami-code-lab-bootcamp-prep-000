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
  konamiCode = [];
  konamiIndex = 0;

  body.addEventListener('keydown', function(e) {
    console.log(e.key);
    key = e.key;
    if(key === codes[konamiIndex]){
      console.log('We Are HITTIN');
      konamiCode.push(key);
      konamiIndex++;
      }
    else if(key !=== codes[konamiIndex]){
      konamiIndex = 0;
      konamiCode = [];
    }
    if(konamiCode === codes){
      console.log('Code Achieved!')
    }
  });




}
