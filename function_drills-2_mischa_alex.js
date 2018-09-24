function jediName(firstName, lastName){
  return lastName.slice(0,3) + firstName.slice(0,2);
}

const myJediName = jediName('Mischa','Berlin');
console.log(myJediName);