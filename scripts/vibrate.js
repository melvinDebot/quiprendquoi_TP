let buttonVibrate = document.getElementsByClassName('button__form')
buttonVibrate.addEventListener('click', vibrationButton(200))

// Suport Navigator
navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

// Function vibrate
function vibrationButton(duration){
  if(navigator.vibrate){
    navigator.vibrate(duration)
    console.log('cela vibre')
  }else{
    navigator.vibrate(0)
  }
}
