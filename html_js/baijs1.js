
a = prompt("Nhap a = ", "");
b = prompt("Nhap b = ", "");
alert(a + 'x + ' + b + '= 0');
function axb(a, b) {
    if (a == 0 && b == 0) {
        alert("Vo so nghiem");
    }
    else if (a == 0) {
        alert("Vo nghiem");
    }
    else if (b == 0) {
        alert("x = 0");
    }
    else {
        alert('x = ' + (- b / a))
    }
}
axb(a, b);
