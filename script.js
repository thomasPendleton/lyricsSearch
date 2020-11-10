// lyrics ovh
const form = document.getElementById("form");
const search = document.getElementById("search");
const result = document.getElementById("result");
const more = document.getElementById("more");

const apiURL = "https://api.lyrics.ovh";

// Search by song or artist
function searchSongs(term) {
  fetch(`${apiURL}/suggest/${term}`)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

// event listeners
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value.trim();
  console.log(searchTerm);

  if (!searchTerm) {
    console.log("nothing");
  } else {
    searchSongs(searchTerm);
  }
});
