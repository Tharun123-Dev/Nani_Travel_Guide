function footerSignup() {
    let email = document.getElementById("footerEmail").value;

    if(email === ""){
        alert("Please enter your email!");
        return;
    }

    document.getElementById("footer-success").innerHTML =
        `THANKS FOR SIGNING UP!<br>We just sent a confirmation email to <br>${email}`;
}

function toggleLang() {
    let menu = document.getElementById("langMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function changeLang(lang) {
    document.querySelector(".lang-btn").innerHTML = `LANGUAGE : ${lang} ▼`;
    toggleLang();
}


// ================= NEWSLETTER MAIN SUBSCRIBE =================
function subscribeNewsletter() {
    let email = document.getElementById("newsEmail").value;

    if (email === "") {
        alert("Please enter your email!");
        return;
    }

    document.getElementById("news-success").innerText =
        "Thanks for signing up! A confirmation email was sent to " + email;
}