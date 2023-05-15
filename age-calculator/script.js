const form = document.getElementById("form");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    calculateAge();
})

function calculateAge() {

    const dayValue = Number(day.value);
    const monthValue = Number(month.value);
    const yearValue = Number(year.value);

    let data = new Date();

    let todayDay = data.getDate();
    let todayMonth = data.getMonth();
    let todayYear = data.getFullYear();

    let lastDayMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if (todayDay > dayValue) {

        todayDay = dayValue + lastDayMonth [todayMonth - 1];
        todayMonth = todayMonth - 1;

    }

    if (monthValue > todayMonth) {

        todayMonth = todayMonth + 12;
        todayYear = todayYear - 1;

    }

    let resultDay = todayDay - dayValue
    let resultMonth = todayMonth - monthValue
    let resultYear = todayYear - yearValue


    if (dayValue === "") {
        setErrorFor(day, "Digite o dia!!!");

    }else {
        setSuccesFor(day, null);
    }


    if (monthValue === "") {
        setErrorFor(month, "Digite o mês!!!");

    }else if (monthValue > 12) {
        setErrorFor(month, "Este mês não é valido.")
        
    } else {
        setSuccesFor(month, null)
    //     resultInput(result);
    //     document.getElementById('result').value = `${resultYear} anos, ${resultMonth} meses e ${resultDay} dias.`
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