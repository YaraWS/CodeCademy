let userName = '';
const userQuestion = 'Will I become a werewolf tonight?';

//Expression that generates a number from 0 to 8 and round it assigned into the variable randomNumber.
let randomNumber = Math.floor(Math.random()*8);
let eightBall = ''; 

userName? console.log(`Hello, ${userName} !`) : console.log('Hello!');

console.log(`The user asked : ${userQuestion}`);

//Switch statment that assign a value to the variable eightBall according to the random number generate on the variable randomNumber.
switch (randomNumber) {
  case 0:
   eightBall = 'It is certain.';
   break;
  case 1:
   eightBall = 'It is decidedly so.';
   break;
  case 2:
   eightBall = 'Reply hazy try again.';
   break;
  case 3: 
   eightBall = 'Cannot predict now.';
   break;
  case 4:
   eightBall = 'Do not count on it.';
   break;
  case 5:
   eightBall = 'My sources say no.';
   break;
  case 6: 
   eightBall = 'Outlook not so good.';
   break;
  case 7:
   eightBall = 'Signs point to yes.';
   break;
  case 8:
   eightBall = 'No doubts.';
   break;
}

//Prints the anwser of the control flow.
console.log(eightBall);
