const searchBar = document.getElementById('search-bar');
const verseDisplay = document.getElementById('verse-display');
const discoverBtn = document.getElementById('discover-btn');
const darkModeBtn = document.getElementById('dark-mode-btn');
const lightModeBtn = document.getElementById('light-mode-btn');

// Function to fetch verse data from API
async function fetchVerse(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    verseDisplay.textContent = 'Error fetching verse.';
  }
}

// Function to display verse content
function displayVerse(data) {
  const verse = `${data.reference} - ${data.text}`;
  verseDisplay.textContent = verse;
}

// Event listener for search bar
searchBar.addEventListener('keyup', async (event) => {
  const searchTerm = event.target.value;
  if (searchTerm) {
    const url = `https://bible-api.com/${searchTerm}`;
    const verseData = await fetchVerse(url);
    if (verseData) {
      displayVerse(verseData);
    }
  } else {
    verseDisplay.textContent = '';
  }
});

// Event listener for discover button (implement random verse fetch here)
discoverBtn.addEventListener('click', async () => {
  // Replace this with logic to fetch a random verse using the API
  const randomUrl = 'https://bible-api.com/random'; // Placeholder for now
  const verseData = await fetchVerse(randomUrl);
  if (verseData) {
    displayVerse(verseData);
  }
});

// Event listener for dark mode button (add logic to toggle dark mode class on body)
darkModeBtn.addEventListener('click', () => {
  // Add code to toggle a class on the body element for dark mode styles
});

// Event listener for light mode button (similar logic to dark mode button)
lightModeBtn.addEventListener('click', () => {
  // Add code to toggle a class on the body element for light mode styles
});

//  Add array iteration example (assuming Bible data is available as an array)
const booksOfTheBible = ['Genesis', 'Exodus', 'Leviticus', /* ... */];

booksOfTheBible.forEach(book => {
  console.log(book); // This iterates through each book name in the array
});