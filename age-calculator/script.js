const form = document.getElementById("form");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    checkInputs();
})

function calculateAge() {

    let data = new Date();

    let todayDay = data.getDate();
    let todayMonth = data.getMonth();
    let todayYear = data.getFullYear();

    let lastDayMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if (todayDay > day) {

        todayDay = day + lastDayMonth [mes2 - 1];
        todayMonth = todayMonth + 1;

    }

    if (month > todayMonth) {

        todayMonth = todayMonth + 12;
        todayYear = todayYear - 1;

    }

    let resultDay = todayDay - day
    let resultMonth = todayMonth - month
    let resultYear = todayYear - year

    document.getElementById("result").innerHTML = `você tem ${resultYear} anos, ${resultMonth} meses e ${resultDay} dias.`

}

function checkInputs() {

    const dayValue = day.value;
    const monthValue = month.value;
    const yearValue = year.value;

    let data = new Date();
    let todayYear = data.getFullYear();

    if (dayValue === "") {
        setErrorFor(day, "Digite o dia!!!");
    }else if(dayValue){

    }



    if (monthValue === "") {
        setErrorFor(month, "Digite o mês!!!");

    }else if (monthValue > 12) {
        setErrorFor(month, "Este mês não é valido.")
        
    } else {
        setSuccesFor(month, null)
    }

    if (yearValue === "") {
        setErrorFor(year, "Digite o ano!!!");

    }else if (yearValue > todayYear) {
        setErrorFor(year, "Este ano não é valido.");

    }else if(year.value.length < 4){
        setErrorFor(year, "Este ano não é valido.");

    }else{
        setSuccesFor(year, null);
    }

}

function setErrorFor(input, mensage) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small")

    small.innerText = mensage;

    formControl.className = "form-control error";

}

function setSuccesFor(input, mensage) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small")

    small.innerText = mensage;

    formControl.className = "form-control succes";
}

function resultInput(input) {
    const formResult = input.parentElement;

    formResult.className = "form-result ok";
}