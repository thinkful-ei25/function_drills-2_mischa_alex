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