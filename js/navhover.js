
function openPage(page){
    window.location.href = page;
}

function openMegaPage(page){
    window.location.href = page;
}

function openDetails(){
    window.location.href = "./html/details.html";
}


//books

  function openPage(pageName) {
      window.location.href = pageName;
  }

//search bar
// SEARCH BUTTON FUNCTIONALITY
const form = document.getElementById("searchForm");
const input = document.getElementById("searchInput");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let query = input.value.trim();

    if (query.length > 0) {
        // Open Google search results
        window.open(`https://www.google.com/search?q=${query} travel`, "_blank");
    }
});

