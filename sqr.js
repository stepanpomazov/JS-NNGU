
var userName = prompt("Введите сюда своё имя", "Введите имя");

if (userName) {
    document.write("Привет, " + userName + "!");
} else if (userName == "Введите имя"){
    alert("Вы не ввели имя...");
    document.write("Привет, анонимус!");
}
else{
    document.write("Привет, анонимус!");
}

var restart = confirm("Начать заново?");

if (restart == true) {
    alert("Не надоело?");
    alert("Не надоело?");
    alert("Не надоело?");
    alert("Не надоело?");
} else {
    alert("Ну и правильно!");
}