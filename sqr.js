
/*
//1
let n = 10;
let summa = 0;
for(let i=1; i< n+1; i++){
    summa = summa + i;
}
console.log(summa);
*/

/*
//2
let number = 4;
let factorial = 1;
for(let i=1; i<number+1; i++){
    factorial *= i;
}
console.log(factorial);
*/

/*
//3
for(let i = 1; i < 101; i++){
    if(i%2 == 0) {
        console.log("Чётное: " + i)
    }
    if(i%2!=0) {
        console.log("Нечётное: " + i)
    }
}
*/

/*
//4
let number = 6;
let proverka = true;
for(let i = 1; i < 100; i++){
    if(number%i == 0) {
        if(i!=1 && i!=number) {
            proverka = false
        }
    }
}
if(proverka == true){
    console.log(number + "  - простое число\n")
}
else{
    console.log(number + "  - не простое число\n")
}
*/

/*
//5
let number = 4;
for(let i = 1; i <=9; i++){
    console.log(number + " x " + i + " = " + number*i)
}
*/

/*
//6
let number = 12345;
let summa = 0;
while(number > 0){
    summa += number%10
    number = ~~(number/10)
}
console.log("Сумма цифр: " + summa);
*/

/*
//7
let number = 12345;
let reversedNumber = "";
while(number > 0){
    reversedNumber += String(number%10)
    number = ~~(number/10)
}
console.log("Обратное число: " + reversedNumber);
*/

/*
let number = 1234567890;
let countOfDigits = 0;
while(number > 0){
    countOfDigits ++
    number = ~~(number/10)
}
console.log("Количество: " + countOfDigits)
*/

/*
//9
let number = 12321;
let numberCopy = number;
let reversedNumber = "";

while(numberCopy > 0){
    reversedNumber += String(numberCopy%10)
    numberCopy = ~~(numberCopy/10)
}
if(reversedNumber == number){
    console.log("Число " + number + " палиндром");
}
else {
    console.log("Число " + number + " не палиндром");
}
*/

/*
//10
let N = 5;
let summaOfSquares = 0;
for(let i = 1; i <= N; i++){
    summaOfSquares += i**2;
}
console.log("Сумма квадратов: "+ summaOfSquares);
*/