document.addEventListener('DOMContentLoaded', function() {
    // Fetch phone data from database
    fetch('db.json')
        .then(response => response.json())
        .then(data => {
            const phoneList = document.getElementById('phone-list');
            data.phones.forEach(phone => {
                const phoneCard = createPhoneCard(phone);
                phoneList.appendChild(phoneCard);
            });
        })
        .catch(error => console.error('Error fetching phone data:', error));  

document.getElementById('phoneFinderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var brand = document.getElementById('brand').value;
    var releaseYear = document.getElementById('releaseYear').value;
    var searchResultsDiv = document.getElementById('searchResults');
});
function createPhoneCard(phone) {
    const card = document.createElement('div');
    card.classList.add('phone-card');

    const image = document.createElement('img');
    image.src = phone.image;
    image.alt = phone.name;
    card.appendChild(image);

    const name = document.createElement('h2');
    name.textContent = phone.name;
    card.appendChild(name);

    const price = document.createElement('p');
    price.textContent = 'Price: $' + phone.price;
    card.appendChild(price);

    const description = document.createElement('p');
    description.textContent = phone.description;
    card.appendChild(description);

    return card;
}