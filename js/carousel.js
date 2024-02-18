

const carouselTrack = document.querySelector('.carousel__track');
const prevButton = document.querySelector('.carousel__button__left');
const nextButton = document.querySelector('.carousel__button__right');
const API_URL = 'https://www.tinakristiansen.no/wp-json/wp/v2/posts/?per_page=100';
let currentIndex = 0;
const numPostsPerSlide = 3;


fetch(API_URL)
    .then(response => response.json())
    .then(posts => {
        console.log(posts); // Add this line to log the API results
        renderCarousel(posts);
    })
    .catch(error => {
        console.error('Error fetching posts:', error);
    });


// Function to render posts on the carousel
function renderCarousel(posts) {
    carouselTrack.innerHTML = '';

    for (let i = currentIndex; i < currentIndex + numPostsPerSlide; i++) {
        if (posts[i]) {
            const post = posts[i];
            const postDiv = document.createElement('div');
            postDiv.classList.add('carousel__slide');
            // Create and append post content here (similar to renderPost function)
            carouselTrack.appendChild(postDiv);
        }
    }
}

// Function to move to the previous slide
function prevSlide() {
    if (currentIndex > 0) {
        currentIndex -= numPostsPerSlide;
        renderCarousel(posts);
    }
}

// Function to move to the next slide
function nextSlide(posts) { // Pass `posts` as a parameter
    if (currentIndex + numPostsPerSlide < posts.length) {
        currentIndex += numPostsPerSlide;
        renderCarousel(posts);
    }
}

// Event listeners for navigation buttons
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', () => nextSlide(posts)); // Pass `posts`

// Fetch latest posts
fetch(API_URL)
    .then(response => response.json())
    .then(posts => {
        // Assuming posts is an array of post objects
        renderCarousel(posts);
        // Store posts in a global variable
        window.posts = posts;
    })
    .catch(error => {
        console.error('Error fetching posts:', error);
    });
