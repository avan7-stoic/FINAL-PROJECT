const books = {
    "Genesis": 50, "Exodus": 40, "Leviticus": 27, "Numbers": 36, "Deuteronomy": 34,
    // Add all books with their chapter counts...
    "John": 21
};

async function fetchRandomVerse() {
    const bookNames = Object.keys(books);
    const randomBook = bookNames[Math.floor(Math.random() * bookNames.length)];
    const randomChapter = Math.floor(Math.random() * books[randomBook]) + 1;
    
    try {
        const response = await fetch(`${'https://bible-api.com/'}/${randomBook}+${randomChapter}`);
        const data = await response.json();
        const randomVerse = data.verses[Math.floor(Math.random() * data.verses.length)];
        displayRandomVerse(randomVerse);
    } catch (error) {
        console.error('Error fetching random verse:', error);
    }
}

function displayRandomVerse(verse) {
    const verseContainer = document.getElementById('random-verse');
    verseContainer.textContent = `${verse.book_name} ${verse.chapter}:${verse.verse} - ${verse.text}`;
}

document.getElementById('fetch-verse').addEventListener('click', fetchRandomVerse);

async function fetchAllVersesFromJohn3() {
    try {
        const response = await fetch(`${'https://bible-api.com/'}/John+3`);
        const data = await response.json();
        displayAllVerses(data.verses);
    } catch (error) {
        console.error('Error fetching all verses:', error);
    }
}

function displayAllVerses(verses) {
    const versesContainer = document.getElementById('all-verses');
    versesContainer.innerHTML = '';
    verses.forEach(verse => {
        const verseElement = document.createElement('div');
        verseElement.textContent = `${verse.book_name} ${verse.chapter}:${verse.verse} - ${verse.text}`;
        versesContainer.appendChild(verseElement);
    });
}

// Fetch all verses from John 3 on page load
fetchAllVersesFromJohn3();
;