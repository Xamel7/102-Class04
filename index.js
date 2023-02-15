window.onload = () =>
{
var player1 = document.getElementById('player1');
var player2 = document.getElementById('player2');
player1.style.left = "50px"
player2.style.right = "50px"
document.addEventListener('keydown', function(event) {
  if (event.key === 'a') {
    player1.classList.add('kick');
    setTimeout(() => {
      player1.classList.remove('kick');
    }, 300);
  } else if (event.key === 's') {
    player1.classList.add('punch');
    setTimeout(() => {
      player1.classList.remove('punch');
    }, 300);
  } else if (event.key === 'k') {
    player2.classList.add('kick');
    setTimeout(() => {
      player2.classList.remove('kick');
    }, 300);
  } else if (event.key === 'l') {
    player2.classList.add('punch');
    setTimeout(() => {
      player2.classList.remove('punch');
    }, 300);
  }else if(event.key === 'd'){
    player1.style.left = parseFloat(player1.style.left || 0) + 5 + "px"
  }
});
}