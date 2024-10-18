// function getMonthName(monthNumber) {
//     let monthName;
//     switch (monthNumber) {
//         case 1:
//             monthName = "January";
//             break;
//         case 2:
//             monthName = "February";
//             break;
//         case 3:
//             monthName = "March";
//             break;
//         case 4:
//             monthName = "April";
//             break;
//         case 5:
//             monthName = "May";
//             break;
//         case 6:
//             monthName = "June";
//             break;
//         case 7:
//             monthName = "July";
//             break;
//         case 8:
//             monthName = "August";
//             break;
//         case 9:
//             monthName = "September";
//             break;
//         case 10:
//             monthName = "October";
//             break;
//         case 11:
//             monthName = "November";
//             break;
//         case 12:
//             monthName = "December";
//             break;
//         default:
//             monthName = "Invalid month number";
//             break;
//     }
//     return monthName;
// }
// let number = 13;
// console.log(number, " -", getMonthName(number));



// function getDayOfWeek(dayNumber) {
//     let dayName;
//     switch (dayNumber) {
//         case 1:
//             dayName = "Понедельник";
//             break;
//         case 2:
//             dayName = "Вторник";
//             break;
//         case 3:
//             dayName = "Среда";
//             break;
//         case 4:
//             dayName = "Четверг";
//             break;
//         case 5:
//             dayName = "Пятница";
//             break;
//         case 6:
//             dayName = "Суббота";
//             break;
//         case 7:
//             dayName = "Воскресенье";
//             break;
//         default:
//             dayName = "Некорректный номер дня недели";
//             break;
//     }
//     return dayName;
// }
// let number = 5;
// console.log(number, " -", getDayOfWeek(number));


// function getFirstWords(text) {
//     let sentences = text.match(/[^.!?]*[.!?]/g);
//     if (!sentences) return "Предложения не найдены";
//     let firstWords = sentences.map(sentence => {
//         let words = sentence.trim().split(/\s+/);
//         return words[0].replace(/[,.!?]/g, '');
//     });
//     return firstWords.join(', ');
// }
// let text = "Привет, Вася! Я очень соскучился. Чем сегодня занимаешься?";
// console.log(getFirstWords(text)); 


// function sayHi(name) {
//     let hour = new Date().getHours(); // Получаем текущий час
//     let frase;
//     if (hour >= 0 && hour <= 5) {
//         frase = "Доброй ночи, " + name;
//     } else if (hour >= 6 && hour <= 11) {
//         frase = "Доброе утро, " + name;
//     } else if (hour >= 12 && hour <= 17) {
//         frase = "Добрый день, " + name;
//     } else if (hour >= 18 && hour <= 23) {
//         frase = "Добрый вечер, " + name;
//     } else {
//         frase = "Ошибка";
//     }
//     return frase;
// }

// console.log(sayHi('Вася'));

// function printAges() {
//     for (let i = 1; i <= 100; i++) {
//         let status;
//         if (i <= 17) {
//             status = "ребенок";
//         } else if (i <= 30) {
//             status = "молодой";
//         } else if (i <= 55) {
//             status = "зрелый";
//         } else {
//             status = "старый";
//         }
//         console.log(`${i} - ${status}`);
//     }
// }

// printAges();


// function getAgeStatus(age) {
//     if (age <= 17) {
//         return "ребенок";
//     } else if (age <= 30) {
//         return "молодой";
//     } else if (age <= 55) {
//         return "зрелый";
//     } else {
//         return "старый";
//     }
// }
// function describePerson(name, age) {
//     let ageStatus = getAgeStatus(age);
//     console.log(`${name} имеет возраст ${age} и он ${ageStatus}.`);
// }
// describePerson('Иван', 99);
