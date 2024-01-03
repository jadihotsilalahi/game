function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operator = ['+', '-', 'x',"/"][Math.floor(Math.random() * 3)];

    return {
        question: `${num1} ${operator} ${num2}`,
        correctAnswer: eval(`${num1} ${operator} ${num2}`)
    };
}

function startGame() {
    const container = document.getElementById('game-container');
    const questionElement = document.getElementById('question');
    const userAnswerElement = document.getElementById('user-answer');
    const resultElement = document.getElementById('result');

    // Generate question
    const { question, correctAnswer } = generateQuestion();
    questionElement.textContent = `What is ${question}?`;

    // Reset result and text color
    resultElement.textContent = '';
    resultElement.style.color = ''; // Reset text color

    // Function to check the answer
    window.checkAnswer = function() {
        const userAnswer = parseInt(userAnswerElement.value);

        if (!isNaN(userAnswer)) {
            if (userAnswer === correctAnswer) {
                resultElement.textContent = 'Jawaban Anda Benar 😊🎉';
                resultElement.style.color = '#13a91a'; // Green color for correct answer
            } else {
                resultElement.textContent = `Jawaban Anda Salah. Silakan Coba Lagi😡.`;
                resultElement.style.color = '#f30c0c'; // Red color for wrong answer
            }

            // Generate a new question after a short delay (e.g., 1 second)
            setTimeout(function() {
                startGame();
            }, 1000);
        } else {
            alert('Please enter a valid number.');
        }
    };
}

// Start the game
startGame();
