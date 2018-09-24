'use strict';
function jediName(firstName, lastName){
  return lastName.slice(0,3) + firstName.slice(0,2);
}

const myJediName = jediName('Mischa','Berlin');
console.log(myJediName);

function beyond (num) {
  if (num !== 0) {
    if (num > 0) {
      return 'To infinity and beyond';
    } else {
      return 'To negative infinity and beyond';
    }
  } else {
    return 'Staying home';
  }
}

let buzzLightyear = beyond(0);
console.log(buzzLightyear);

function decode(str){
  let words = str.split(' ');
  let returnString = '';
  for(let i = 0; i < words.length; i++){
    switch (words[i][0]){
    case 'a':
      returnString += words[i][1];
      break;
    case 'b':
      returnString += words[i][2];
      break;
    case 'c':
      returnString += words[i][3];
      break;
    case 'd':
      returnString += words[i][4];
      break;
    default:
      returnString += ' ';
      break;
    }
  }
  return returnString;
}
let decoded = decode('craft block argon meter bells brown croon droop');
console.log(decoded);

function howManyDays (month, leapYear = false) {
  try {
    switch (month) {
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
      return `${month} has 31 days.`;
      break;
    case 'February':
      if (leapYear === false) {
        return 'February has 28 days.';
        break;
      } else {
        return 'Feburary has 29 days.';
        break;
      }
    case 'April':
    case 'June':
    case 'September':
    case 'November':
      return `${month} has 30 days.`;
      break;
    default:
      throw new Error('Please enter a valid month');
      break;
    }
  }
  catch(e) {
    return e.message;
  }
}

let days = howManyDays('January');
console.log(days);


function rockPaperScissors(num){
  const randomNo = Math.floor(Math.random() * 3) + 1;
  try{
    if (num !== 1 && num !== 2 && num !== 3 ){
      throw new Error('ERROR!!!');
    }
    if(num === randomNo){
      return `computer: ${randomNo} num: ${num} TIE!`;
    }else if(num > randomNo && num !== 1)
    {
      return `computer: ${randomNo} num: ${num} You Win!`;
    }else {
      return `computer: ${randomNo} num: ${num} You lose!`;
    }
  }catch(e){
    return e.message;
  }
}

const playRPS = rockPaperScissors(3);
console.log(playRPS);