function szamol() {
    var testtomeg = parseFloat(document.getElementById('testtomeg').value);
    var magassag = parseFloat(document.getElementById('magassag').value) / 100;
    var bmi = testtomeg / (magassag * magassag);
    var sulytobblet = 0;

    if (!isNaN(bmi)) {
        bmi = Math.max(0, bmi); 
        document.getElementById('bmi').textContent = bmi.toFixed(2);
        document.getElementById('bmi').style.backgroundColor = bmi < 18 ? '#FFD700' : (bmi >= 18 && bmi <= 25) ? '#008000' : '#FF0000';
        sulytobblet = Math.max(0, (bmi - 25) * (magassag * magassag)); 
    } else {
        document.getElementById('bmi').textContent = '';
    }

    document.getElementById('sulytobblet').textContent = sulytobblet.toFixed(2);
}