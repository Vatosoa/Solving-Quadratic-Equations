function resolveEquation() {
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
    var c = parseFloat(document.getElementById('c').value);

    var discriminant = b ** 2 - 4 * a * c;
    var resultElement = document.getElementById('result');

    if (discriminant > 0) {
        var x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        var x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        resultElement.innerHTML = 'Les solutions sont x1 = ' + x1 + ' et x2 = ' + x2;
    } else if (discriminant === 0) {
        var x = -b / (2 * a);
        resultElement.innerHTML = 'La solution double est x = ' + x;
    } else {
        resultElement.innerHTML = 'Pas de solution réelle';
    }
}
