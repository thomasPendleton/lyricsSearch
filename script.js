// lyrics ovh
const form = document.getElementById("form");
const search = document.getElementById("search");
const result = document.getElementById("result");
const more = document.getElementById("more");

const apiURL = "https://api.lyrics.ovh";

// Search by song or artist
async function searchSongs(term) {
    const res = await fetch(`${apiURL}/suggest/${term}`);
    const data = await res.json();
    console.log(data)
    showData(data);
  }

  // show song and artist in dom
  function showData(){
    
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
