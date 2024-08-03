const wordList =[
    {
        word : "python",
        hint: "Programming Language"
    },
    {
        word: "guitar",
        hint: "a musical instrument"
    },
    {
        word : "aim",
        hint: "A propose or intension"
    },
    {
        word: "venus",
        hint: "Planet of our solar system"
    },
    {
        word : "gold",
        hint: "A yellow precious metal"
    },
    {
        word: "evay",
        hint: "Online shopping site"
    },
    {
        word : "golang",
        hint: "Programming language"
    },
    {
        word: "coding",
        hint: "Latest to programming"
    },
    {
        word: "apple",
        hint: "Fruit with red color"
    },
    {
        word: "mango",
        hint: "fruit with yellow and green color"
    },
    {
        word: "mirror",
        hint: "Good place to take selfie"
    },
    {
        word: "dog",
        hint: "bright puppy"
    },
    {
        word: "umbrella",
        hint: "To cover sunlight and rain"
    },
    {
        word: "watch",
        hint: "To know the current time"
    }
];

let score =0;
let count =1;
let round=5;
const inputs = document.querySelector(".inputs");
resetbtn = document.querySelector(".reset-btn");
hint = document.querySelector(".hint span");
guessLeft = document.querySelector(".guess-less span");
wrongletter = document.querySelector(".wrong-letter span")
typintInput = document.querySelector(".typing-input");
time = document.querySelector(".time span");
time.innerText = round;
let word,maxGuesses,corrects = [], incorrects = [];

function randomWord(){
    let ranObj = wordList[Math.floor(Math.random()*wordList.length)];
    word = ranObj.word;
    maxGuesses = 8;
    corrects = [];
    incorrects = [];
    

    hint.innerText = ranObj.hint;
    guessLeft.innerText = maxGuesses;
    wrongletter.innerText = incorrects;
    
    let html ="";
    for(let i =0; i<word.length;i++){
        html += `<input type="text"  disabled>`;
    }
    inputs.innerHTML=html;
}

// function initGame(e){
    
//     let key = e.target.value;
//     if(key.match(/^[A-Za-z]+$/) && !incorrects.includes() && !corrects.includes(key)){
        

//         if(word.includes(key)){ //if user found in the word
//             for(let i =0; i<word.length;i++){ 
//                 //showing match letter in the input fields
//                 if(word[i] === key){
//                     corrects.push(key);
//                     inputs.querySelectorAll("input")[i].value = key;
//                 }
//             }
//         }else{
//             maxGuesses--;
//             incorrects.push(`${key}`);
//         }
//     }
//     guessLeft.innerHTML = maxGuesses;
//     wrongletter.innerText = incorrects;
//    typintInput.value = "" ;
   
//    setTimeout(()=>{
    
//     console.log(count);
//     if(corrects.length === word.length){
//         alert(`Congrats, you found the word ${word.toUpperCase()}`);
//         randomWord();// calling random function , so the game reset
//         score=score+1;
//         count++;
//         round--;
//         time.innerText = round;
        
//      }else if(maxGuesses<1){// if user could not found all letters
//         alert("game over! You don't have remaing guesses");
//         count++;
//         round--;
//         time.innerText = round;
//         for(let i =0; i<word.length;i++){
//             inputs.querySelectorAll("input")[i].value = word[i];
//         }
       
//        }


function initGame(e) {
    let key = e.target.value.toLowerCase(); // Convert input to lowercase for case insensitivity
    
    // Check if input is a letter and hasn't been guessed yet
    if (key.match(/^[A-Za-z]$/) && !incorrects.includes(key) && !corrects.includes(key)) {
        
        let foundMatch = false;
        
        // Check if the guessed letter is in the word
        for (let i = 0; i < word.length; i++) {
            if (word[i] === key) {
                corrects.push(key); // Add to correct guesses
                inputs.querySelectorAll("input")[i].value = key; // Update corresponding input field
                foundMatch = true;
            }
        }
        
        if (!foundMatch) {
            maxGuesses--; // Decrease remaining guesses
            incorrects.push(key); // Add to incorrect guesses
        }
    }
    
    guessLeft.innerText = maxGuesses;
    wrongletter.innerText = incorrects.join(', '); // Display incorrect guesses
    typintInput.value = ""; // Clear the input field after each guess

    // Check game end conditions
    setTimeout(() => {
        if (corrects.length === word.length) {
            alert(`Congrats, you found the word ${word.toUpperCase()}`);
            randomWord(); // Reset the game
            score++;
            count++;
            round--;
            time.innerText = round;
        } else if (maxGuesses < 1) {
            alert("Game over! You ran out of guesses.");
            count++;
            round--;
            time.innerText = round;
            for (let i = 0; i < word.length; i++) {
                inputs.querySelectorAll("input")[i].value = word[i]; // Show the correct word
            }
        }
        if(count>5){
            // document.querySelector(".wrapper").style.display="none";
            document.querySelector(".wrapper").style.visibility="hidden";
            Swal.fire({
                title: "Good job!",
                text: `Your Score:  ${score} !`,
                icon: "success"
              });
           }
    });
}

      

       
       
//    });
   

    
// }

randomWord();

resetbtn.addEventListener("click",randomWord);
typintInput.addEventListener("input",initGame);
inputs.addEventListener("click",()=>typintInput.focus());
document.addEventListener("keydown",()=>typintInput.focus());

document.querySelector(".wrapper").style.visibility = "hidden";
var btn = document.querySelector(".btn");
btn.addEventListener("click",()=>{
    document.querySelector(".wrapper").style.visibility = "visible"; 
    document.querySelector(".dict").style.display= "none";
})