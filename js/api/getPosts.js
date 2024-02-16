// import { API_URL } from "../constants/constants.js";

// // Used to fetch any API / data
// async function getPosts(url) {
//     try {
//         const response = await fetch(url);
//         const json = await response.json();

//         console.log(json);
//         return json;

//     } catch (error) {
//         console.log('Error fetching API', error);
//     }
// }


// function renderPost(post) {
//     const section = document.querySelector('.container-posts');
//     const postDiv = document.createElement('div');
//     postDiv.classList.add('blog-posts');

//     const postTitle = document.createElement('h2');
//     postTitle.innerText = post.title.rendered;
//     postTitle.classList.add('blog-title');


//     const postBody = document.createElement('p');
//     const truncatedBody = post.content.rendered.substring(0, 190);
//     postBody.innerHTML = truncatedBody + '...';

//     const postReadmore = document.createElement('a')
//     postReadmore.innerText = 'Read more';
//     postReadmore.classList.add('link');
//     postReadmore.href = `post.html?id=${post.id}`;


//     const postCategory = document.createElement('h3');
//     postCategory.innerText = post.categories.array;
//     postCategory.classList.add('category');

//     const postPublished = document.createElement('h3');
//     const truncatedDate = post.date_gmt.substring(0, 10)
//     postPublished.innerText = truncatedDate;
//     postPublished.classList.add('date-published');


//     postDiv.appendChild(postTitle);
//     postDiv.appendChild(postBody);
//     postDiv.appendChild(postReadmore);
//     postDiv.appendChild(postPublished);


//     section.appendChild(postDiv); // Appends the post div to the section
// }



// async function renderPosts(url) {
//     const posts = await getPosts(url);
//     posts.forEach(post => renderPost(post)); // Call renderPost for each post
// }




// // Call renderPosts with the API URL
// renderPosts(API_URL);

import { API_URL } from "../constants/constants.js";

// fetch API / data
async function getPosts(url) {
    try {
        const response = await fetch(url);
        const json = await response.json();

        console.log(json);
        return json;

    } catch (error) {
        console.log('Error fetching API', error);
    }
}

// Function to render a single post
function renderPost(post) {
    const section = document.querySelector('.container-posts');
    const postDiv = document.createElement('div');
    postDiv.classList.add('blog-posts');

    const postTitle = document.createElement('h2');
    postTitle.innerText = post.title.rendered;
    postTitle.classList.add('blog-title');

    const postBody = document.createElement('p');
    const truncatedBody = post.content.rendered.substring(0, 190);
    postBody.innerHTML = truncatedBody + '...';

    const postReadmore = document.createElement('a')
    postReadmore.innerText = 'Read more';
    postReadmore.classList.add('link');
    postReadmore.href = `post.html?id=${post.id}`;

    const postCategory = document.createElement('h3');
    postCategory.innerText = post.categories.array;
    postCategory.classList.add('category');

    const postPublished = document.createElement('h3');
    const truncatedDate = post.date_gmt.substring(0, 10)
    postPublished.innerText = truncatedDate;
    postPublished.classList.add('date-published');

    postDiv.appendChild(postTitle);
    postDiv.appendChild(postBody);
    postDiv.appendChild(postReadmore);
    postDiv.appendChild(postPublished);

    section.appendChild(postDiv); // Appends the post div to the section
}

let numberDisplayedPosts = 9; // number = how many posts to show

// Render many posts
async function renderPosts(url, numberToDisplay) {
    const posts = await getPosts(url);
    const section = document.querySelector('.container-posts');

    // Clear existing posts before rendering
    section.innerHTML = '';

    // Render only the specified number of posts
    posts.slice(0, numberToDisplay).forEach(post => renderPost(post));
}

// Function to handle "Show more" button click event
function handleShowMore() {
    numberDisplayedPosts += 3; // Increase the number of displayed posts by 3
    renderPosts(API_URL, numberDisplayedPosts);

    // Hide the "Show more" button if all posts are displayed
    if (numberDisplayedPosts >= 12) {
        const buttonContainer = document.querySelector('.button-container');
        buttonContainer.style.display = 'none';
    }
}

// Add event listener to the "Show more" button
const showMoreButton = document.querySelector('.button');
showMoreButton.addEventListener('click', handleShowMore);

// Call renderPosts with the API URL and initial number of posts to display
renderPosts(API_URL, numberDisplayedPosts);
