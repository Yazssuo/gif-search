const userInput = document.querySelector('#input');
const submit = document.querySelector('#search');
const container = document.querySelector('#gifs')
const deleteBtn = document.querySelector('#delete');

const key = '75zcx19vQ9sl0RElwXBx8uf3wnCHNj7R';

async function getGif(term) {
    const response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${term}&api_key=${key}&limit=1`);
    const newImg = document.createElement('img');
    console.dir(response.data);
    newImg.src = response.data.data[0].images.original.url;
    container.append(newImg);
}

function searchGif(e) {
    e.preventDefault();
    const gif = getGif(userInput.value);
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

submit.addEventListener('click', searchGif);
deleteBtn.addEventListener('click', function(e){
    removeAllChildNodes(container);
})