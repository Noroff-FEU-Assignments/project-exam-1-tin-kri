

// Fetch the post data based on the post ID
async function fetchPost(postId) {
    try {
        const postResponse = await fetch(`https://www.tinakristiansen.no/wp-json/wp/v2/posts/${postId}`);
        return await postResponse.json();
    } catch (error) {
        console.log('Error fetching post:', error);
        throw error; // Rethrow the error to handle it in the caller function
    }
}

// Fetch the featured image URL based on the post ID
async function fetchFeaturedImageUrl(postId) {
    try {
        const postData = await fetchPost(postId);

        if (postData.featured_media) {
            const mediaResponse = await fetch(`https://www.tinakristiansen.no/wp-json/wp/v2/media/${postData.featured_media}`);
            const mediaData = await mediaResponse.json();
            return mediaData.source_url;
        }
    } catch (error) {
        console.log('Error fetching featured image URL:', error);
        throw error; // Rethrow the error to handle it in the caller function
    }
}

// Render the post content and featured image
function renderPost(postData, featuredImageUrl) {
    const container = document.querySelector('.container-post');
    container.innerHTML = ''; // Clearing the container to make room for appending

    // Create and append elements for post title and date
    const postTitle = document.createElement('h1');
    postTitle.classList.add('blog-post-title');
    postTitle.innerText = postData.title.rendered;
    container.appendChild(postTitle);

    const datePublished = document.createElement('p');
    datePublished.classList.add('date-published');
    datePublished.innerText = postData.date_gmt.substring(0, 10);
    container.appendChild(datePublished);

    // Create and append element for post content
    const postContent = document.createElement('div');
    postContent.classList.add('blog-post-text');
    postContent.innerHTML = postData.content.rendered;
    container.appendChild(postContent);

    // Fetch and display featured image if available
    if (featuredImageUrl) {
        const postImage = document.createElement('img');
        postImage.classList.add('blog-post-img');
        postImage.src = featuredImageUrl;
        postImage.alt = postData.title.rendered;
        postImage.style.cursor = 'pointer'; // Add pointer cursor
        postImage.addEventListener('click', () => {
            window.open(featuredImageUrl, '_blank', 'width=800,height=600');
        });
        container.appendChild(postImage);
    }
}

// Display the post content
async function displayPost(postId) {
    try {
        const postData = await fetchPost(postId);
        const featuredImageUrl = await fetchFeaturedImageUrl(postId);
        renderPost(postData, featuredImageUrl);
    } catch (error) {
        console.log('Error displaying post:', error);
    }
}

// Usage: Call displayPost with the post ID
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');
displayPost(postId);
