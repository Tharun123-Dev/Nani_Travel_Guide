function scrollLeftDest() {
    document.getElementById("destScroll").scrollBy({
        left: -300,
        behavior: "smooth"
    });
}

function scrollRightDest() {
    document.getElementById("destScroll").scrollBy({
        left: 300,
        behavior: "smooth"
    });
}

function openDestination(pageName) {
    window.location.href = pageName;
}
