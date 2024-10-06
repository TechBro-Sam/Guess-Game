let secretNumber = Math.trunc(Math.random() * 20);
console.log(secretNumber)
let score = 5;
let highscore = 0;
let show =document.getElementById('showMe').textContent
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (guess == '') {

    displayMessage('⛔️PLEASE INPUT A NUMBER!');

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      if (score==1 ){
alert("YOU HAVE ONE CHANCE LEFT")
      }
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');  
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#FF0000';
      document.querySelector('.number').innerHTML=secretNumber;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
    score = 5;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber)
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor="black"
    document.querySelector('.number').style.width="15rem"
});