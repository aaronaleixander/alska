/**
 * This j-query will help with button visibility while playing greed kata
 * */
$("#playButton").on("click", function(){
   $("#playButton").hide();
    $("#playAgainButton").show();
    $("#homeButton").show();
});

/**
 * This function will initialize an instance of the main core functionality of Greed Kata
 * */
function playGame(){
    let currentRoll = rollFiveDice();
    console.log(currentRoll.toString());
    console.log(calculateScore(currentRoll));

    document.getElementById("dice-roll").innerHTML = "You rolled: " + currentRoll.toString(); // Output Roll
    document.getElementById("score").innerHTML = "You scored: " + calculateScore(currentRoll); // Output Score
}

/**
 * This function accepts map as argument and will calculate score based on greed kata
 * scoring rules
 * @param diceArray the array of user dice roll - single roll of five dice
 * @return score the calculated score
 * */
function calculateScore(diceArray){
    // field properties
    let ones = 0;
    let twos = 0;
    let threes = 0;
    let fours = 0;
    let fives = 0;
    let sixes = 0;

    let totalScore = 0;
    let scoreArray = [];

    // loop through dice array and count each roll
    for(let i = 0; i < diceArray.length; i++){
        if(diceArray[i] === 1){
           ones++;
        } else if(diceArray[i] === 2){
            twos++;
        } else if(diceArray[i] === 3){
            threes++;
        } else if(diceArray[i] === 4){
            fours++;
        } else if(diceArray[i] === 5){
            fives++;
        } else {
            sixes++;
        }
    }

    // push all counts too array (index 0 is ones) (index 1 is twos) ... (index 5 is sixes)
    scoreArray.push(ones, twos, threes, fours, fives, sixes);

    console.log(scoreArray);

    // calculate score based on roll counts
    for(let i = 0; i < scoreArray.length; i++){
        if(i === 0 && scoreArray[i] === 5){ // Five Ones
            totalScore += 1200;
        } else if(i === 0 && scoreArray[i] === 4){ // Four Ones
            totalScore += 1100;
        } else if(i === 0 && scoreArray[i] === 3){ // Four Ones
            totalScore += 1000;
        } else if(i === 0 && scoreArray[i] !== 0){ // Ones
            let value = scoreArray[i];
            totalScore += (100 * value);
        } else if(i === 4 && scoreArray[i] === 5){ // Five Fives
            totalScore += 600;
        } else if(i === 4 && scoreArray[i] === 4){ // Four Fives
            totalScore += 550;
        } else if(i === 4 && scoreArray[i] === 3){ // Four Fives
            totalScore += 500;
        } else if(i === 4 && scoreArray[i] !== 0){ //Fives
            let value = scoreArray[i];
            totalScore += (50 * value);
        } else if(i === 1 && scoreArray[i] === 3){ // Three Twos
            totalScore += 200;
        } else if(i === 2 && scoreArray[i] === 3){ // Three Threes
            totalScore += 300;
        } else if(i === 3 && scoreArray[i] === 3){ // Three Fours
            totalScore += 400;
        } else if(i === 5 && scoreArray[i] === 3){ // Three Sixes
            totalScore += 600;
        }
    }
    return totalScore;
}

/*
/**
 * This function will map each roll to a key and increment value for each time that key is in dice array
 * @param fiveDice the array of five random dice rolls
 * @return the Map of all rolls and value count
 *
function mapDiceRoll(fiveDice){
    let diceMap = new Map();
    for(let i = 0; i < fiveDice.length; i++){
        if(diceMap.has(fiveDice[i])){
            diceMap.get(i).val++; // if map already has key then increment value.
        }
        diceMap.set(i, {val: 1}); // else set the key into map and set value to 1

    }
    return diceMap;
}
*/

/**
 * This function will roll five dice by generating an array of 5 random integers 1 - 6
 * */
function rollFiveDice(){
    let diceArray = [];
    for(let i = 0; i < 5; i++){
        diceArray.push(getRandomNumber(1,6)); // call getRandomNumber to add random number (element) to each index of array
    }
    return diceArray;
}

/**
 * This helper function will generate a random number within a given range
 * @return  random number between given range -> (min - max)
 * */
function getRandomNumber(min, max){
    return  parseInt(Math.random() * (max - min) + min); // return random number in given range
}