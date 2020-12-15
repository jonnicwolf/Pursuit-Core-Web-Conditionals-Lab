let age = 26 

if(age>30) {
    amIOld = 'young'
}
else {
    amIOld = 'old'
}
console.log(amIOld)


let age1 = 1000

switch(age1) {
    case 65: 
    console.log('iam 65')
    //break;
    case 45: 
    console.log('i am 45')
    default: 
    console.log('i don\'t know my age')
}

if (age !== 65) {
    console.log('young immortal')
}
else if (age === 75) {

}//break - allows you to break the switch before you hit default

//see also
let name = 'fezz'

switch(true) {
    case name < 'oneee':
        console.log('yeeeee')
    case 'fezz':
        console.log('hello')
    default:
        console.log('huh?')
}

let myName = 'jimmy'

switch(myName) {
    case 'james' :
        console.log('i am 37')
    case 'ales':
        console.oog('i am 25')
    case 'jimmy':
        console.log('i dont know')
    default:
        console.log('damn')

}


let num = 2;
if (num === 1) {
  console.log("Jackpot!");
} else if (num === 2) {
  console.log("You won 10 coins");
} else if (num === 3) {
  console.log("You won 20 coins");
} else {
  console.log("Try again.");}