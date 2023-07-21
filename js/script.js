function showNumber() {
    var numberdc = document.getElementById("number").value;
    var valor = numberdc.replace(/\s+/g, ''); 

    var numerosSeparados = valor.match(/.{1,4}/g).join(" ");
    document.getElementById("number").value = numerosSeparados;

    document.getElementById("exibirNumero").textContent = numberdc;

    if (!/^\d*$/.test(valor)) { 
        document.getElementById("mensagemErro").textContent = "Wrong format, numbers only.";
        document.getElementById("number").value = ""; // Limpa o input em caso de entrada inválida
        document.getElementById("number").classList.add("error-border");
    } else {
        document.getElementById("mensagemErro").textContent = "";
        document.getElementById("number").classList.remove("error-border");
    }
}

function showName() {
    var name = document.getElementById("nome").value;
    document.getElementById("showName").textContent = name;
}

function showDay() {
    var day = document.getElementById("day").value;
    document.getElementById("showDay").textContent = day;

}

function showMonth() {
    var month = document.getElementById("month").value;
    document.getElementById("showMonth").textContent = month;
}

function showCvc() {
    var cvc = document.getElementById("cvc").value;
    document.getElementById("showCvc").textContent = cvc;
}


//Limita a quantidade de Digitos do input e permiite apenas número
function onlyNumbers(event) {
    var charCode = event ? event.charCode || event.keyCode : null;
    if (charCode === 8 || charCode === 9) {
        return true;
    }
    if (charCode < 48 || charCode > 57) {
        return false;
    }
}

function limitDigitsCard(event) {
    var max = 18;
    var card = document.getElementById('number');
    card.value = card.value.slice(0, max);
    onlyNumbers(event); // Passa o evento como parâmetro
}

function limitDigitsDay(event) {
    var max = 1;
    var day = document.getElementById('day');
    day.value = day.value.slice(0, max);
    onlyNumbers(event); 
}

function limitDigitsMonth(event) {
    var max = 1;
    var month = document.getElementById('month');
    month.value = month.value.slice(0, max);
    onlyNumbers(event); 
}

function limitDigitsCvc(event) {
    var max = 2;
    var cvc = document.getElementById('cvc');
    cvc.value = cvc.value.slice(0, max);
    onlyNumbers(event); 
}