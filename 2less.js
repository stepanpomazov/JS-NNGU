

/*
let userName = "Philipp";
let userSurname = "Kirkorov";
function getFullUserName (name,surname){
    return name + " " + surname;
}
console.log(getFullUserName(userName,userSurname));*/
/*
function sayHi(name){
    if (name === undefined){
        console.log ("Привет, гость!");
    }
    else{
        console.log ("Привет, " + name + "!");
    }
}
sayHi("Валерий");
sayHi();
*/
/*
function pow(number, stepen = 1){
    return number ** stepen;
}
console.log(pow(3,2));
console.log(pow(3));
*/
/*
let pow = (a,b=1) => a**b;
console.log(pow(3));
console.log(pow(3,4));*/
/*
let sayHi = (userName = "Гость") => console.log("Привет, " + userName + "!");
sayHi("Вася");
sayHi();
*/
/*
function strokaNtimes(stroka, N=1){
    for (i = 0; i < N;i++){
        console.log(stroka);
    }
}
strokaNtimes('Строка',5);
*/
/*
let strokaNtimes = (stroka, N=1) => {for(i = 0;i<N;i++){console.log(stroka)}};
strokaNtimes("Строка",3);
*/
/*
function firstElemToUpperCase(stroka){
    let firstelem = stroka[0];
    let otherelem = stroka.slice(1);
    return firstelem.toUpperCase()+otherelem;
}
console.log(firstElemToUpperCase("василий"));
*/

// let toUp = (stroka) => console.log(stroka[0].toUpperCase() + stroka.slice(1));
// toUp('вася');
