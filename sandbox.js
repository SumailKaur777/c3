// for loops


//for(let i = 0; i  <  5; i++){
//console.log('in loop:', i);

// }

//console.log('loop finished');

//while loop

/*let i = 0;

while(i < 5){
    console.log('in loop: ' , i);
    i++;
}*/

//if statements
/*const age = 21;

if (age > 20){
    console.log('you are over 20 years old');
}


const makeup = ['foundation', 'lip gloss', 'contour', 'highlighter'];
if (makeup.length  > 3){
    console.log("That is makeup")
}

//else if statements

const password = 'banjarahu main';

if(password.length >= 12){
    console.log('that password is very long');


}else if(password.length >= 8){
    console.log('that password is long enough');

}else{
    console.log('password is too short');
}


// logical NOT (!)

let user = false;

if(!user){
console.log('you must be logged in to continue');
}

console.log(!true);
console.log(!false);

// break and continue

const scores = [50, 23, 100, 30, 20,10];

for(let i = 0; i < scores.length; i++){

    if (scores[i] === 0){
        continue;
    }

    console.log('your score:', scores[i]);



if(scores[i] === 100){



    console.log('congrats, u won');
    break;
}
}


//switch statements

const grade = 'A';

switch(grade){
    case 'A':
        console.log('u got an A!');
        break;
        case 'B':
            console.log('u got an B!');
            break;   
        case 'C':
            console.log('u got an C!');
            break;
        case 'D':
        console.log('u got an D!');
        break;
        case 'E':
        console.log('u got an E!');
        break;
        default:
            console.log('not a valid grade');
}*/


// variables and block scope

let age = 30;


if(true){

    let age = 44;
    let name = 'skp';
    console.log('inside 1st code block:', age,name);
}

console.log('outside code block:', age, name);