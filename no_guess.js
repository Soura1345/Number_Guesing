// IT'S A FUNNY GAME OF NUMBER GUESSING

// The user has to guess a number between 1 and 100
const minNum = 1;
const maxNum = 100;

//Generate random no.
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum ;

//Count the no. of attempts
let attemps = 0;
let guess;

//Control the loop
let running = true;

while(running){
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert(`PLEASE ENTER A NUMBER !`);
    }
    else if(guess < minNum || guess > maxNum){
        window.alert(`YOU ARE OUT OF RANGE`);
    }
    else{
        attemps++;
        if(guess < answer){
            window.alert("TOO LOW! TRY AGAIN!");
        }
        else if(guess > answer){
            window.alert("TOO HIGH! TRY AGAIN!");
        }
        else{
            window.alert(`CORRECT! The answer is ${answer}, you took ${attemps} attempts`);
            running = false;
        }
    }
}