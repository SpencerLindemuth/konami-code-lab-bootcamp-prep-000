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
  const body = document.querySelector('body')
  body.addEventListener('keydown', onKeyDownHandler(e))
  console.log('e')
}

function onKeyDownHandler(e){

}

init()
