function showNumber() {
    var numberdc = document.getElementById("number").value;
    var valor = numberdc.replace(/\s+/g, ''); // Removendo espaços em branco

    document.getElementById("exibirNumero").textContent = numberdc;

    if (!/^\d*$/.test(valor)) { // Agora permitindo espaços em branco na entrada
        document.getElementById("mensagemErro").textContent = "Wrong format, numbers only.";
        document.getElementById("number").value = ""; // Limpa o input em caso de entrada inválida
        document.getElementById("number").classList.add("error-border");
    } else {
        document.getElementById("mensagemErro").textContent = "";
        document.getElementById("number").classList.remove("error-border");
    }


    var numerosSeparados = valor.match(/.{1,4}/g).join(" ");
    document.getElementById("number").value = numerosSeparados;
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


//Limita a quantidade de Digitos do input
function onlyNumbers(e) {
    var charCode = e.charCode ? e.charCode : e.keyCode;
    if (charCode == 8 || charCode == 9) {
        return true;
    }
    if (charCode < 48 || charCode > 57) {
        return false;
    }
}

function limitDigitsCard() {
    var max = 18;
    var card = document.getElementById('number');
    card.value = card.value.slice(0, max);
    onlyNumbers();
}

function limitDigitsDay() {
    var max = 1;
    var day = document.getElementById('day');
    day.value = day.value.slice(0, max);
    onlyNumbers();
}

function limitDigitsMonth() {
    var max = 1;
    var month = document.getElementById('month');
    month.value = month.value.slice(0, max);
    onlyNumbers();
}

function limitDigitsCvc() {
    var max = 2;
    var month = document.getElementById('cvc');
    month.value = month.value.slice(0, max);
    onlyNumbers();
}
