function giaipt() {
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    var nghiemElement = document.getElementById("nghiem");

    if (a == 0 && b != 0) {
        nghiemElement.textContent = "Phương trình vô nghiệm";
    }
    else if (a == 0 && b == 0) {
        nghiemElement.textContent = "Phương trình vô số nghiệm";
    }
    else {
        var x = -b / a;
        nghiemElement.textContent = "Phương trình có nghiệm x = " + x;
    }
}