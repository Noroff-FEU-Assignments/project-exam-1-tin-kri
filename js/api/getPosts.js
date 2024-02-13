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

async function renderPosts(url) {
    const posts = await getPosts(url);
    posts.forEach(post => renderPost(post)); // Call renderPost for each post
}

// Call renderPosts with the API URL
renderPosts(API_URL);
