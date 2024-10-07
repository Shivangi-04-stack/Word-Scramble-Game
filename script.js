const words = [
    { word: "EXCHANGE", scrambled: "A E G E X C N H", hint: "The act of trading" },
    { word: "PROGRAM", scrambled: "R G M O A P R", hint: "A sequence of instructions" },
    { word: "JAVASCRIPT", scrambled: "A P J V I C R S T A", hint: "A popular programming language" },
    { word: "DATABASE", scrambled: "A T A D S E B A", hint: "A structured set of data" },
    { word: "DEVELOPER", scrambled: "L E P O E R D E V", hint: "A person who writes code" }
];

let currentWordIndex = 0;
let attempts = 0;
let timer;
let timeLeft = 15;

function startGame() {
    currentWordIndex = Math.floor(Math.random() * words.length);
    const wordObject = words[currentWordIndex];
    
    document.getElementById('scrambled-word').textContent = wordObject.scrambled;
    document.getElementById('hint').textContent = "Hint: " + wordObject.hint;
    document.getElementById('user-input').value = '';
    document.getElementById('feedback').textContent = '';
    document.getElementById('attempts').textContent = 'Attempts: 0';
    attempts = 0;
    timeLeft = 15;
    document.getElementById('time').textContent = timeLeft;
    
    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('time').textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById('feedback').textContent = 'Time is up! Try again.';
        }
    }, 1000);
}

document.getElementById('check-word').addEventListener('click', () => {
    const userInput = document.getElementById('user-input').value.toUpperCase();
    attempts++;
    document.getElementById('attempts').textContent = `Attempts: ${attempts}`;
    
    if (userInput === words[currentWordIndex].word) {
        document.getElementById('feedback').textContent = 'Correct! You unscrambled the word.';
        clearInterval(timer);
    } else {
        document.getElementById('feedback').textContent = 'Incorrect! Try again.';
    }
});

document.getElementById('refresh-word').addEventListener('click', startGame);

startGame();
