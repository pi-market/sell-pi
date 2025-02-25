const apiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=pi-network&vs_currencies=usd';

function fetchPiPrice() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            let price = data['pi-network'].usd + 0.5; // Add $0.50 to the price
            document.getElementById('pi-price').innerText = `$${price.toFixed(2)}`;
        })
        .catch(error => console.error('Error fetching Pi price:', error));
}

// Update price every 1 minute (60000 ms)
setInterval(fetchPiPrice, 60000);

// Fetch price on page load
fetchPiPrice();
