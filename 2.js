document.addEventListener('DOMContentLoaded', function () {
    var mozgasformakTabla = document.getElementById('mozgasformakTabla');
    var idoTabla = document.getElementById('idoTabla');

    
    var mozgasformak = ['Futás', 'Focizás', 'Bringázás', 'Hegymászás', 'Lovaglás', 'Túrázás', 'Kajakozás', 'Súlyzós edzés', 'Pingpongozás', 'Kutyasétáltatás'];

    
    for (var i = 0; i < mozgasformak.length; i++) {
        var rowMozgas = mozgasformakTabla.insertRow();
        var cellMozgas = rowMozgas.insertCell();
        cellMozgas.textContent = mozgasformak[i];

        var rowIdo = idoTabla.insertRow();
        var cellIdo = rowIdo.insertCell();
        cellIdo.innerHTML = '<input type="number" id="ido' + i + '" />';
    }
});

function szamol() {
    var kcalOsszesen = 0;
    var idoOsszesen = 0;

    for (var i = 0; i < 10; i++) {
        var idoInput = document.getElementById('ido' + i);
        var ido = parseFloat(idoInput.value);

        if (!isNaN(ido) && ido > 0) {
            var kcalPerOra = 0;

            switch (i) {
                case 0:
                    kcalPerOra = 680;
                    break;
                case 1:
                    kcalPerOra = 550;
                    break;
                case 2:
                    kcalPerOra = 480;
                    break;
                case 3:
                    kcalPerOra = 420;
                    break;
                case 4:
                    kcalPerOra = 370;
                    break;
                case 5:
                    kcalPerOra = 360;
                    break;
                case 6:
                    kcalPerOra = 340;
                    break;
                case 7:
                    kcalPerOra = 320;
                    break;
                case 8:
                    kcalPerOra = 270;
                    break;
                case 9:
                    kcalPerOra = 200;
                    break;
            }

            kcalOsszesen += kcalPerOra * (ido / 60);
            idoOsszesen += ido;
        }
    }

    var szazalek = (kcalOsszesen / 2000) * 100;

    var eredmenyekDiv = document.getElementById('eredmenyek');
    eredmenyekDiv.innerHTML = '<strong>Összesen elégetett kalória:</strong> ' + kcalOsszesen.toFixed(2) + ' kcal<br>';
    eredmenyekDiv.innerHTML += '<strong>Összesen eltöltött idő:</strong> ' + idoOsszesen.toFixed(2) + ' perc<br>';
    eredmenyekDiv.innerHTML += '<strong>Kalóriák a napi szükségletnek:</strong> ' + szazalek.toFixed(2) + '%';
}

function adatokTorlese() {
    for (var i = 0; i < 10; i++) {
        var idoInput = document.getElementById('ido' + i);
        idoInput.value = '';
    }
    var eredmenyekDiv = document.getElementById('eredmenyek');
    eredmenyekDiv.innerHTML = '';
}