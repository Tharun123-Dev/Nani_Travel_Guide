// OPEN PANEL
function openPanel() {
    document.getElementById("bookPanel").classList.add("active");
    document.getElementById("bestsellerBox").style.display = "none";   // hide yellow strip
}

// CLOSE PANEL
function closePanel() {
    document.getElementById("bookPanel").classList.remove("active");
    document.getElementById("bestsellerBox").style.display = "block";  // show yellow strip
}
function openDetails() {
    window.location.href = "details.html";   // your page
}
