# Greed Kata - The Single Roll - Dice Game
I originally knew that I wanted to implement this exercise into a playable web application but first wanted to get the core game logic implemented using Java so I can test and use the debugger if necessary.

PLAY GREED KATA HERE : https://autterback.greenriverdev.com/328/alska/

The steps I wanted to take was:
1) Generate an array of 5 random numbers 1 - 6 that represents a roll of the dice.
2) Store the array of random integers into a map structure, with the key being the element rolled and value increments for repeated elements in the array. This functionality was a success with Java but did not work out for me when converting to JavaScript. The logic is however commented out. I took a defferent route in the JavaScript to calculate score.
3) Calculate score based on the mapped keys/values 

Here is my Java implementation:

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class Greed {
    public static void main(String[] args) {

        System.out.println(getRandomNumber(1,6));

        ArrayList<Integer> currentRoll = rollFiveDice();

        System.out.println(currentRoll.toString());

        HashMap<Integer,Integer> map = mapDiceRoll(currentRoll);
        System.out.println(map);

        System.out.println(calculateScore(map));
    }

    /**
     * This function will accept a hashmap as an argument and calculate score based on the keys values.
     * @param map the hashmap that stores the rolls
     * @return score
     * */
    public static int calculateScore(HashMap<Integer, Integer> map){
        int totalScore = 0;
        for(Map.Entry<Integer,Integer> entry : map.entrySet()){
            if(entry.getKey() == 1 && entry.getValue() == 5){ // Five Ones
                totalScore += 1200;
            } else if(entry.getKey() == 1 && entry.getValue() == 4){ // Four ones
                totalScore += 1100;
            } else if(entry.getKey() == 1 && entry.getValue() == 3){ // Three Ones
                totalScore += 1000;
            } else if(entry.getKey() == 1){ // Ones
                int value = entry.getValue();
                totalScore += (100 * value);
            } else if(entry.getKey() == 5 && entry.getValue() == 5){ // Five Fives
                totalScore += 600;
            } else if(entry.getKey() == 5 && entry.getValue() == 4){ // Four Fives
                totalScore += 550;
            } else if(entry.getKey() == 5 && entry.getValue() == 3){ // Three Fives
                totalScore += 500;
            } else if(entry.getKey() == 5 ){ // Fives
                int value = entry.getValue();
                totalScore += (50 * value);
            } else if(entry.getKey() == 2 && entry.getValue() == 3){ // Three Twos
                totalScore += 200;
            } else if(entry.getKey() == 3 && entry.getValue() == 3){ // Three Threes
                totalScore += 300;
            } else if(entry.getKey() == 4 && entry.getValue() == 3){ // Three Fours
                totalScore += 400;
            } else if(entry.getKey() == 6 && entry.getValue() == 3){ // Three Sixes
                totalScore += 600;
            }
        }
        return totalScore;
    }

    /**
     * This function will each roll to a key and increment value for each repeated key
     * @param fiveDice the ArrayList of five random dice rolls
     * @return map The HashMap of rolls(key) and count for each time roll(value) is repeated
     * */
    public static HashMap<Integer, Integer> mapDiceRoll(ArrayList<Integer> fiveDice){
        HashMap<Integer, Integer> map = new HashMap<>();
        for(int i = 0; i < fiveDice.size(); i++){
            int key = fiveDice.get(i);
            // if key does not exist put 1 as value
            // other wise sum 1 to the value linked to key
            map.merge(key, 1, Integer::sum); // see what merge() does in above comments
        }
        return map;
    }

    /**
     * This function will roll five dice by generating an array of 5 random
     * integers 1 - 6.
     * @return ArrayList of 5 random integers
     * */
    public static ArrayList<Integer> rollFiveDice(){
        ArrayList<Integer> diceArray = new ArrayList<>();
        for(int i = 0; i < 5; i++){
            diceArray.add(getRandomNumber(1,6));
        }
        return diceArray;
    }

    /**
     * This helper function will generate a random number through any given range.
     * @param min lower bound
     * @param max upper bound
     * @return the random number generated in given range
     * */
    public static int getRandomNumber(int min, int max){
        return (int) (Math.random() * (max - min) + min);
    }
}

#After converting to JavaScript 

I decided to show some comprehension of routing using PHP and the server-side framework Fat-Free.
I also integrated jQuery and Bootstrap into the web application to help with layout and some game functionality. 
