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
    if(key === 'a' && key === codes[konamiIndex]){
      console.log('FINALLY')
    }
    else if(key === codes[konamiIndex]){
      console.log('We Are HITTIN');
      konamiCode.push(key);
      konamiIndex++;
      console.log(konamiCode);
      if(konamiCode === codes){
        console.log('Code Achieved');
      }
      }
    else{
      konamiIndex = 0;
      konamiCode = [];
      console.log(konamiCode);
    }
  });


}
