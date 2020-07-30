//Random Numbers between 0 and 1000. 
let raceNumber = Math.floor(Math.random() * 1000);


//Runner's Condition 
let registeredEarly = true;
let runnersAge = 47;

//***CONTROL FLOW***

// Early Adults
if(runnersAge > 18 && registeredEarly === true){
  raceNumber += 1000;};

//Late Adults and Youths
if(runnersAge > 18 && registeredEarly === true) {
  console.log(`You will run at 9:30 am and your race number is ${raceNumber}.`);
} else if (runnersAge > 18 && registeredEarly === false) {
  console.log(`You will race at 11:00 am and your race number is ${raceNumber}.`);} else if (runnersAge < 18){
    console.log(`You will run at 12:30 pm and your race number is ${raceNumber}.`);
  } else {
    console.log('Please go to see the registration desk.');
  };






