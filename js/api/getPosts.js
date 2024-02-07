import { API_URL } from "../constants/constants.js";

// Used to fetch any API / data
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

function renderPost(post) {
    const section = document.querySelector('.blog-posts');
    const postDiv = document.createElement('div');

    const postTitle = document.createElement('h2');
    postTitle.innerText = post.title;
    postTitle.classList.add('blog-title');

    const postPublished = document.createElement('h3');
    postPublished.innerText = post.date_gmt;
    postPublished.classList.add('date-published');

    const postBody = document.createElement('p');
    postBody.innerText = post.excerpt;

    postDiv.appendChild(postTitle);
    postDiv.appendChild(postBody);
    postDiv.appendChild(postPublished);

    section.appendChild(postDiv); // Append the post div to the section
}

async function renderPosts(url) {
    const posts = await getPosts(url);
    posts.forEach(post => renderPost(post)); // Call renderPost for each post
}

// Call renderPosts with the API URL
renderPosts(API_URL);
