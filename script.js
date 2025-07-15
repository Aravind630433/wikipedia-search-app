const searchInput = document.getElementById("searchInput");
const resultsContainer = document.getElementById("resultsContainer");

searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    fetchResults();
  }
});

function fetchResults() {
  const query = searchInput.value;
  const url = "https://apis.ccbp.in/wiki-search?search=" + query;
  fetch(url)
    .then(res => res.json())
    .then(data => {
      resultsContainer.innerHTML = "";
      data.search_results.forEach(result => {
        const div = document.createElement("div");
        div.className = "result-item";
        div.innerHTML = `
          <a href="${result.link}" target="_blank">
            <h3>${result.title}</h3>
          </a>
          <p>${result.description}</p>
        `;
        resultsContainer.appendChild(div);
      });
    });
}
