const apiKey = 'N6T8pCbi7b6LlDkN51WrwiBJKtOq0PUF6y07tpXY';
const apiUrl = 'https://api.nasa.gov/planetary/apod';

const dateInput = document.getElementById('date-input');
const searchButton = document.getElementById('search-button');
const image = document.getElementById('image');
const title = document.getElementById('title');
const explanation = document.getElementById('explanation');

searchButton.addEventListener('click', () => {
    const date = dateInput.value;
    if (date) {
        clearPreviousResults();
        fetch(`${apiUrl}?api_key=${apiKey}&date=${date}`)
            .then(response => response.json())
            .then(data => {
                if (data.hdurl) {
                    image.src = data.hdurl;
                } else if (data.url) {
                    image.src = data.url;
                }
                title.textContent = data.title;
                explanation.textContent = data.explanation;
            })
            .catch(error => console.error(error));
    }
});

function clearPreviousResults() {
    image.src = '';
    title.textContent = '';
    explanation.textContent = '';
}


