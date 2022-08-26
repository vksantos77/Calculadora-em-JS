// Função que mostra o valor do input num alert
function mostrarValor() {
    //alert(document.getElementById("meu-submit").value);
    var n1 = document.getElementById("number1").value;
    var n2 = document.getElementById("number2").value;

    const n1conv = parseInt(n1);
    const n2conv = parseInt(n2);


    var n3 = (n1conv + n2conv);

alert(n3);


   
}

