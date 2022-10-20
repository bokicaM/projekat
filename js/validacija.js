function validacija() {
    let x = document.forms["forma"]["brTel"].value;
    let y = document.forms["forma"]["brRez"].value;
    if (x == "" || y == "") {
        alert("Molimo vas da popunite sva polja!");
    }
}
