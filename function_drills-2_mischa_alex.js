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
  let words = str.split(" ");
  let returnString = "";
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
        returnString += " ";
        break;
    }
  }
  return returnString;
}
let decoded = decode('craft block argon meter bells brown croon droop');
console.log(decoded);

