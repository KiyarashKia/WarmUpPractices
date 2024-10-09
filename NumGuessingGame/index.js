const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum)

console.log(answer);


let attempts = 0;
let guess;
let running = true;

while(running) {
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)) {
        window.alert("Please enter a valid number");
    }
    else if(guess < minNum || guess > maxNum) {
        window.alert("Please enter a valid number between the range");
    }
    else {
        attempts++;
        if(guess == answer) {
            let attemptWord = attempts > 1 ? "attempts" : "attempt";
            window.alert(`Congrats! It took you ${attempts} ${attemptWord} to guess the right one!`); 
        }
    }

}