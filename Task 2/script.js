document.getElementById('convert').onclick = tempconverter;
document.getElementById('Reset').onclick = clearform;

function tempconverter() {
    var fahrenheit = document.getElementById('fahrenheit').value;
    var Celcius = document.getElementById('Celcius').value;

    if (fahrenheit != '') {
        Celcius = (parseFloat(fahrenheit) - 32) / 1.8;
    } else if (Celcius != '') { 
        fahrenheit = (parseFloat(Celcius) * 1.8) + 32;
    } else {
        alert("Please enter a value in either Celsius or Fahrenheit.");
        return; 
    }

    document.getElementById('fahrenheit').value = parseFloat(fahrenheit).toFixed(1);
    document.getElementById('Celcius').value = parseFloat(Celcius).toFixed(1);
}

function clearform() {
    document.getElementById('fahrenheit').value = '';
    document.getElementById('Celcius').value = '';
}
