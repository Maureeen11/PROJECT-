
document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/products/featured')
        .then(response => response.json())
        .then(products => {
            const productContainer = document.querySelector('.product-list');
            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <a href="/products/${product.id}" class="btn">View Details</a>
                `;
                productContainer.appendChild(productCard);
            });
        });
});
