let QRC = new QRCode("qrcode");

function makeCode () {
    let elText = document.getElementById("text");

    if (!elText.value) {
        alert("Input a text");
        elText.focus();
        return;
    }

    QRC.makeCode(elText.value);
}

makeCode();

$("#text").
on("blur", function () {
    makeCode();
}).
on("Enter", function (e) {
    if (e.keyCode == 13) {
        makeCode();
    }
});