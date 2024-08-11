//Task 1

let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

//Task 2
function displayProducts() {
    // Get the container element where you want to display the products
    const productContainer = document.getElementById('product-container');
    
    // Clear any existing content in the container
    productContainer.innerHTML = '';

    // Loop through the products array and create HTML elements for each product
    products.forEach(product => {
        // Create a div element for each product
        let productDiv = document.createElement('div');
        productDiv.className = 'product';
        
        // Create and append the product name
        let nameElement = document.createElement('h2');
        nameElement.textContent = product.name;
        productDiv.appendChild(nameElement);
        
        // Create and append the product price
        let priceElement = document.createElement('p');
        priceElement.textContent = `Price: $${product.price.toFixed(2)}`;
        productDiv.appendChild(priceElement);
        
        // Create and append the product description
        let descriptionElement = document.createElement('p');
        descriptionElement.textContent = product.description;
        productDiv.appendChild(descriptionElement);
        
        // Append the productDiv to the container
        productContainer.appendChild(productDiv);
    });
}

//Task 3
document.addEventListener('DOMContentLoaded', function() {
    displayProducts();
});
