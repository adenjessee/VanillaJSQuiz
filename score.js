

var scoreText = document.getElementById("highscore");
console.log( localStorage.getItem('highScore'))
scoreText.textContent = localStorage.getItem('highScore');
