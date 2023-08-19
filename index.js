

function myFunction() {
    if (document.getElementById("yname").value === "") {
        alert("Please enter your name and click submit");
    } else {

        document.getElementById("message_to_display").innerHTML = "Thank you " + document.getElementById("yname").value + ". Please find bellow some of my works.";
        document.getElementById("form1").style.display = "none";
        document.getElementById("submit").style.display = "none";
        document.getElementById("portfolio-container").style.display = "flex";
    }
}

