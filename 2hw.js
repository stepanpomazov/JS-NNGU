


//1

// let summ = (n) => {summa = 0; for (i = 0; i<=n;i++) {summa += i} return summa}
// console.log(summ(5));


//2

// let fact = (n) => {factorial = 1; for (i=1;i<=n;i++){factorial*=i} return factorial}
// console.log(fact(4))


//3

// function chetOrNechet (){
//     for(let i = 1; i < 101; i++){
//         if(i%2 == 0) {
//             console.log("Чётное: " + i)
//         }
//         if(i%2!=0) {
//             console.log("Нечётное: " + i)
//         }
//     }
// }
// chetOrNechet();



//4


// function isPrime (number){
//     let proverka = true;
//     for(let i = 1; i < 100; i++){
//         if(number%i == 0) {
//             if(i!=1 && i!=number) {
//                 proverka = false
//             }
//         }
//     }
//     if(proverka == true){
//         console.log(number + "  - простое число\n")
//     }
//     else{
//         console.log(number + "  - не простое число\n")
//     }
// }
// isPrime(6);




//5


// function tableOfMultiplication (number){
//     for(let i = 1; i <=9; i++){
//         console.log(number + " x " + i + " = " + number*i)
//     }
// }
// tableOfMultiplication(9);


//6

// function summDigit (number){
//     let summa = 0;
//     while(number > 0){
//         summa += number%10
//         number = ~~(number/10)
//     }
//     return summa;
// }
// console.log(summDigit(12345))


//7
// function reserseNumber (number){
//     let reversedNumber = "";
//     while(number > 0){
//         reversedNumber += String(number%10)
//         number = ~~(number/10)
//     }
//     return reversedNumber;
// }
// console.log(reserseNumber(12345));

//8
// let countOfDigits = (number) => {count = 0; while(number>0){count ++; number = ~~(number/10)} return count;}
// console.log(countOfDigits(123456789));


//9

// function isPalindrom (number){
//     let numberCopy = number;
//     let reversedNumber = "";
//     while(numberCopy > 0){
//         reversedNumber += String(numberCopy%10)
//         numberCopy = ~~(numberCopy/10)
//     }
//     if(reversedNumber == number){
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// console.log(isPalindrom(12321));



//10
let sumOfSquares = (N) => {summ = 0; for(let i = 1; i <= N; i++){ summ += i**2;} return summ;};
console.log(sumOfSquares(5));

