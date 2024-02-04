function calculateIMC() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    if (weight !== '' && height !=='') {
        var bmi = weight/((height/100)**2);
        var result = document.getElementById('result');
        result.innerHTML = 'tu IMC es: '+ bmi.toFixed(2);
        //clasificacion del IMC
        if (bmi<18.5){
            result.innerHTML +='-bajo peso';
        }else if (bmi<25){
            result.innerHTML+= '-peso normal';
        }else if (bmi<30){
            result.innerHTML+= '-sobrepeso';
        }else {
            result.innerHTML+= '-obesidad';
        }


    }
}