<<<<<<< HEAD

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
=======
/*
const firstUserAge = 16;
const secondUserAge = 30;
if (firstUserAge >= 18){
    console.log("Пользователю больше или равно 18 лет");
}
else if (firstUserAge >= 20){
    console.log("Пользователь старше 14 лет");
}
else {
    console.log("Пользователь младше 18 лет");
} */
/* 
const userAge = 16;
let isUserAge = userAge>18;
console.log(    isUserAge);
*/
/*
let temp = 35;
if (temp < -30){
    console.log("Оставайтесь дома");
}
else{
    console.log("Можно выйти на улицу");
}
*/
/*let temp = -25;
if (temp >= -30){  // temp >= -30 && temp <= -10
    if (temp <= -10){
        console.log("На улице холодно");
    }
} 
*/
/*
console.log(null || 0 || "" || undefined);
console.log("яблоко" || true && null && 1);
console.log(0 || true && "false" || null);
console.log(0 || true || "false" && null);
console.log(!0 && !!1);
 */
/*
let i = 0;
for (; i <= 3; i++){
    console.log(i);
}
console.log(i);
 */

/*
let n = 10;
for (let i = 0; i < n; i++){
    console.log("***");
}
 */
/*
let n = 100;
let m = 5;
let c = 0;
while (n>m){
    c = c + 1;
    n = n / 2;
}
console.log(c);
// 100 - > 50
// 50 - > 25
// 25 - > 12
// 12 - > 6
// 6 - > 3
 */
/*
let counterIterationsTo_1961 = 0;
let countOfVisYears = 0;
for (let year = 1800; year<=2020; year++){
    counterIterationsTo_1961++;
    if (year === 1961){
        console.log(counterIterationsTo_1961);
    }
    if (year%4===0){
        if(year%100 ===0 && year%400===0){
            //
        }
        else{
            countOfVisYears++;
        }      
    }
}
console.log(countOfVisYears);
*/
>>>>>>> da84e69c9a409b33688d27fe88e89d1a4a30552d
