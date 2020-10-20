var btnCalculate = document.getElementById('calculate');

btnCalculate.onclick = calculateWeight;

function calculateWeight() {
    var weightE = document.getElementById('weight').value;
    var cmbPlanet = document.getElementById('planet');
    var planet = cmbPlanet.options[cmbPlanet.selectedIndex].value;
    var gravity;

    if (planet === 'Selecione um planeta') {
        alert("Favor selecionar um planeta");
        return;
    }

    switch (planet) {
        case 'Mercúrio':
            gravity = 0.37
            break;
        case 'Vênus':
            gravity = 0.88
            break;
        case 'Marte':
            gravity = 0.38
            break;
        case 'Júpiter':
            gravity = 2.64
            break;
        case 'Saturno':
            gravity = 1.15
            break;
        case 'Urano':
            gravity = 1.17
            break;    
    }

    var weightP = (weightE / 10) * gravity;
    alert("Seu peso no planeta " + planet + " é " + parseFloat(weightP.toFixed(2)) + "kg");

}
