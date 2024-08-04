// Sample data for product listings and user reviews
const products = [
    { id: 1, name: 'Product A', price: 29.99 },
    { id: 2, name: 'Product B', price: 39.99 },
    // Add more products
];

const reviews = [
    { productId: 1, username: 'User1', rating: 4, comment: 'Great product!' },
    { productId: 1, username: 'User2', rating: 5, comment: 'Excellent quality.' },
    // Add more reviews
];

// Function to render product listings
function renderProducts() {
    const productListSection = document.getElementById('product-list');

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <h2>${product.name}</h2>
            <p>$${product.price}</p>
            <button onclick="showReviews(${product.id})">Show Reviews</button>
        `;
        productListSection.appendChild(productCard);
    });
}

// Function to render user reviews
function renderReviews(productId) {
    const reviewsSection = document.getElementById('user-reviews');
    reviewsSection.innerHTML = '<h2>User Reviews</h2>';

    const productReviews = reviews.filter(review => review.productId === productId);

    if (productReviews.length === 0) {
        reviewsSection.innerHTML += '<p>No reviews yet.</p>';
    } else {
        productReviews.forEach(review => {
            const reviewCard = document.createElement('div');
            reviewCard.className = 'review-card';
            reviewCard.innerHTML = `
                <p><strong>${review.username}</strong></p>
                <p>Rating: ${review.rating}</p>
                <p>${review.comment}</p>
            `;
            reviewsSection.appendChild(reviewCard);
        });
    }
}

// Function to show reviews for a specific product
function showReviews(productId) {
    renderReviews(productId);
}

// Initial render
renderProducts();
