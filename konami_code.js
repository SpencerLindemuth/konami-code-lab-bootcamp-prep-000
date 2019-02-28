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
  var konamiCode = [];
  var konamiIndex = 0;

  body.addEventListener('keydown', function(e) {
    console.log(e.key);
    key = e.key;
    if(key === codes[konamiIndex]){
      console.log('We Are HITTIN');
      konamiCode.push(key);
      konamiIndex++;
      }
    else{
      konamiIndex = 0;
      konamiCode = [];
    }
  });

if(konamiCode === codes){
  console.log('Code Achieved!')
};


}
