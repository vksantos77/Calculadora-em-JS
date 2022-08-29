// Função que mostra o valor do input num alert
function Somar() {
    //alert(document.getElementById("meu-submit").value);
    var n1 = document.getElementById("number1").value;
    var n2 = document.getElementById("number2").value;

    const n1conv = parseFloat(n1);
    const n2conv = parseFloat(n2);


    var n3 = (n1conv + n2conv);

alert(n3);
}

function Subtrair(){

    var n1 = document.getElementById("number1").value;
    var n2 = document.getElementById("number2").value;

    const n1conv = parseFloat(n1);
    const n2conv = parseFloat(n2);

    const n3 = n1conv - n2conv;

    alert(n3);
}

function Dividir(){
    
    const n1 = document.getElementById("number1").value;
    const n2 = document.getElementById("number2").value;

    const n1conv = parseFloat(n1);
    const n2conv = parseFloat(n2);

    const n3 = (n1conv / n2conv);

    alert(n3);
}



function Multiplicar(){
    
    const n1 = document.getElementById("number1").value;
    const n2 = document.getElementById("number2").value;

    const n1conv = parseFloat(n1);
    const n2conv = parseFloat(n2);

    const n3 = (n1conv * n2conv);

    alert(n3);
}
