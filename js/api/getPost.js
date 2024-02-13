
// Fetch the post ID from the URL query parameter
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');

// Function to fetch and render the full post content
// async function fetchPost() {
//     try {
//         const response = await fetch(`http://lenore-poe.local/wp-json/wp/v2/posts/${postId}`);
//         const post = await response.json();

//         // Update the post content in the HTML
//         document.querySelector('.blog-post-title').innerText = post.title.rendered;
//         document.querySelector('.date-published').innerText = post.date_gmt.substring(0, 10);
//         document.querySelector('.blog-post-text').innerHTML = post.content.rendered;
//         // Update the image source if you have one
//         if (post.featured_media) {
//             const imageResponse = await fetch(`http://lenore-poe.local/wp-json/wp/v2/media/${post.featured_media}`);
//             const imageData = await imageResponse.json();
//             document.querySelector('.blog-post-img').src = imageData.source_url;
//         }
//     } catch (error) {
//         console.log('Error fetching post:', error);
//     }
// }


async function fetchPost() {
    try {
        // Fetch post data
        const postResponse = await fetch(`http://lenore-poe.local/wp-json/wp/v2/posts/${postId}`);
        const postData = await postResponse.json();

        // Create new elements
        const postTitle = document.createElement('h1');
        postTitle.classList.add('blog-post-title');
        postTitle.innerText = postData.title.rendered;

        const datePublished = document.createElement('p');
        datePublished.classList.add('date-published');
        datePublished.innerText = postData.date_gmt.substring(0, 10);

        const postContent = document.createElement('div');
        postContent.classList.add('blog-post-text');
        postContent.innerHTML = postData.content.rendered;

        const container = document.querySelector('.container-post');
        container.innerHTML = ''; // Clear the container

        // Append new elements to the container
        container.appendChild(postTitle);
        container.appendChild(datePublished);
        container.appendChild(postContent);

        // Check if the post has a featured image
        if (postData.featured_media) {
            // Fetch featured image data
            const mediaResponse = await fetch(`http://lenore-poe.local/wp-json/wp/v2/media/${postData.featured_media}`);
            const mediaData = await mediaResponse.json();

            // Extract the featured image URL
            const featuredImageUrl = mediaData.source_url;

            // Create and append image element
            const postImage = document.createElement('img');
            postImage.classList.add('blog-post-img');
            postImage.src = featuredImageUrl;
            postImage.alt = postData.title.rendered; // Use post title as alt text
            container.appendChild(postImage);
        }
    } catch (error) {
        console.log('Error fetching post:', error);
    }
}

fetchPost();


