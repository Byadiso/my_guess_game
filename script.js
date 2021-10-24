'use strict';


let RandomNumber = document.querySelector('#number');

let checkBtn = document.querySelector('#check_btn_myNumber');
let restartBtn = document.querySelector('#restart_btn_myNumber');
var inputNumber = document.querySelector('#guess_number');
var display_error = document.querySelector('#error');
var display_message = document.querySelector('#title');

//for score
var my_score_display = document.querySelector('#score');
var my_highScore_display = document.querySelector('#highscore');
var my_life_display = document.querySelector('#life');

var my_score = 0;
var my_life = 20;
var my_high_score = 0 ;


let my_random_guess_number;
let number ; 

let message;


//this will generate a number between 1-20
function getRandomNumber(){
     return Math.floor(Math.random()*20);
}

function getMyNumber(input){
       return input.value;   
}


checkBtn.addEventListener('click', (e)=>{
 e.preventDefault(); 
 let score = 0
 //check an empty value
 if(inputNumber.value.length == 0){
    // console.log('please input your number'); 
    display_error.textContent= 'Please input your number first'  
     return;
 }

//check if great that 10 then return
if(inputNumber.value > 20){
    // console.log('please input your number between 1-20'); 
    display_error.textContent= 'Your number should be between 1-20'  
     return;
 }

 if(my_life == 0){
    return console.log('you life is over');
}

//  getRandomNumber();
 let my_random_guess_number = getRandomNumber();
 let my_number = getMyNumber(inputNumber)
//  console.log(my_random_guess_number);
//  console.log(my_number);

 //check the whole logic
 
 RandomNumber.textContent = my_random_guess_number;
 check(my_random_guess_number,my_number);
 

})

function check(guess, number){      
    if(guess == number){
        win();
        checkWin();
    } else {
         lose();
         checkWin();
    }
}

function win(){
    
    display_message.classList.add('win');
    display_message.classList.remove('lose');
    display_message.textContent = "Correct";
   

    //for displaying score  
    my_life = parseInt(my_life);
    my_score = parseInt(my_score) + 1;

    // console.log(my_life);
    // console.log(my_score);

    // console.log('Correct your remaining life is ' + my_life);
    // console.log('Correct your score is ' + my_score);

    //display my score
    my_life_display.textContent = my_life;
    my_score_display.textContent = my_score;    
 
}

function lose(){    
    display_message.classList.add('lose');
    display_message.classList.remove('win');
    display_message.textContent = "Wrong";
    // RandomNumber.textContent = getRandomNumber();

    // for displaying score
    // let my_high_score = getMyNumber(score);
    my_life = parseInt(my_life) - 1 ;
    my_score = parseInt(my_score);

    
    //display my score
    my_life_display.textContent = my_life;
    my_score_display.textContent = my_score;
    

}

function checkWin(){
   
    let highScore = 0; 
    if(my_life == 0 ){
        if(my_score > 10){
            display_message.classList.add('finalWin');
            display_message.classList.remove('lose');
            display_message.classList.remove('win');
            display_message.textContent = "Congrat you win my friend!!";
            document.body.style.backgroundColor = "green";
        
          
            highScore = my_score
            // console.log(highScore)
            my_highScore_display.textContent = highScore ;
            restartBtn.classList.remove('hide');
            checkBtn.classList.add('hide');
            
           
        } else if(my_score == 10){
            display_message.classList.add('win');
            display_message.classList.remove('lose');
            display_message.textContent = "Not bad it a draw!";
        
            
            highScore = my_score
            //  console.log(highScore)
            my_highScore_display.textContent = highScore;
            restartBtn.classList.remove('hide');
            checkBtn.classList.add('hide');
           
        } else {
            display_message.classList.add('lose');
            display_message.classList.remove('win');
            display_message.textContent = "Ops You loose try again!";    
            
            highScore = my_score 
             console.log(highScore)
            my_highScore_display.textContent = highScore;
            restartBtn.classList.remove('hide');
            checkBtn.classList.add('hide');            
        }              
       
    }
    
}


restartBtn.addEventListener('click',(e)=>{
    e.preventDefault();   
    restart();

})

function restart(){
    // console.log("start again");
    restartBtn.classList.add('hide');
    checkBtn.classList.remove('hide'); 
     my_score = 0;
     my_life = 20;
     my_high_score = 0 ;
     inputNumber.value = '';
     RandomNumber.textContent= "?"

     display_message.classList.remove('win');
     display_message.classList.remove('lose');

     display_message.textContent = 'Guess My Number!';
     my_score_display.textContent= 0    
     my_life_display.textContent = 20;
     document.body.style.backgroundColor = "black";
     display_message.classList.remove('finalWin');
    
}


// when input value clear the gues number
inputNumber.addEventListener('input',(e)=>{
    e.preventDefault();
    RandomNumber.textContent="?";
    display_message.textContent="Guess my number";
    display_message.classList.remove("win");
    display_message.classList.remove("lose");     
    display_error.textContent=""; //for clearing error

})

