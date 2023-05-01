const form = document.getElementById("form");
const cpf = document.getElementById("cpf");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const cpfValue = cpf.value;

    if (cpfValue === "") {
        setErrorFor(cpf, "O CPF é obrigatório.");
    }
    else{
        setSuccessFor(cpf);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;

    formControl.className = "form-control error";
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = "form-control success";
}

