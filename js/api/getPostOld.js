
// // // Fetch the post ID from the URL query parameter
// // const urlParams = new URLSearchParams(window.location.search);
// // const postId = urlParams.get('id');



// // async function fetchPost() {
// //     try {
// //         // Fetch post data
// //         const postResponse = await fetch(`http://lenore-poe.local/wp-json/wp/v2/posts/${postId}`);
// //         const postData = await postResponse.json();

// //         // Create new elements
// //         const postTitle = document.createElement('h1');
// //         postTitle.classList.add('blog-post-title');
// //         postTitle.innerText = postData.title.rendered;

// //         const datePublished = document.createElement('p');
// //         datePublished.classList.add('date-published');
// //         datePublished.innerText = postData.date_gmt.substring(0, 10);

// //         const postContent = document.createElement('div');
// //         postContent.classList.add('blog-post-text');
// //         postContent.innerHTML = postData.content.rendered;

// //         const container = document.querySelector('.container-post');
// //         container.innerHTML = ''; // Clear the container

// //         // Append new elements to the container
// //         container.appendChild(postTitle);
// //         container.appendChild(datePublished);
// //         container.appendChild(postContent);

// //         // Check if the post has a featured image
// //         if (postData.featured_media) {
// //             // Fetch featured image data
// //             const mediaResponse = await fetch(`http://lenore-poe.local/wp-json/wp/v2/media/${postData.featured_media}`);
// //             const mediaData = await mediaResponse.json();

// //             // Extract the featured image URL
// //             const featuredImageUrl = mediaData.source_url;

// //             // Create and append image element
// //             const postImage = document.createElement('img');
// //             postImage.classList.add('blog-post-img');
// //             postImage.src = featuredImageUrl;
// //             postImage.alt = postData.title.rendered; // Use post title as alt text
// //             container.appendChild(postImage);
// //         }
// //     } catch (error) {
// //         console.log('Error fetching post:', error);
// //     }
// // }

// // fetchPost();


// // async function openFeaturedImageInNewWindow(postImageId) {
// //     try {
// //         // Fetch the post data to get the featured media ID
// //         const postResponse = await fetch(`http://lenore-poe.local/wp-json/wp/v2/posts/${postId}`);
// //         const postData = await postResponse.json();

// //         // Extract the featured media ID from the post data
// //         const featuredMediaId = postData.featured_media;

// //         // Fetch the featured media data to get the image URL
// //         const mediaResponse = await fetch(`http://lenore-poe.local/wp-json/wp/v2/media/${featuredMediaId}`);
// //         const mediaData = await mediaResponse.json();

// //         // Extract the image URL from the media data
// //         const imageUrl = mediaData.source_url; // Assuming source_url contains the image URL

// //         // Create a new image element
// //         const imgElement = document.createElement('img');
// //         imgElement.src = imageUrl;

// //         // Add a click event listener to the image element
// //         imgElement.addEventListener('click', () => {
// //             // Open a new window with the image URL
// //             window.open(imageUrl, '_blank', 'width=800,height=600');
// //         });

// //         // Append the image element to the document body or wherever appropriate
// //         document.body.appendChild(imgElement);
// //     } catch (error) {
// //         console.error('Error opening featured image:', error);
// //     }
// // }

// // // Call the function with the post ID
// // const postImageId = 123; // Replace with the actual post ID
// // openFeaturedImageInNewWindow(postImageId);
// // Fetch the post ID from the URL query parameter
// const urlParams = new URLSearchParams(window.location.search);
// const postId = urlParams.get('id');

// async function fetchPost() {
//     try {
//         // Fetch post data
//         const postResponse = await fetch(`http://lenore-poe.local/wp-json/wp/v2/posts/${postId}`);
//         const postData = await postResponse.json();

//         // Create new elements
//         const postTitle = document.createElement('h1');
//         postTitle.classList.add('blog-post-title');
//         postTitle.innerText = postData.title.rendered;

//         const datePublished = document.createElement('p');
//         datePublished.classList.add('date-published');
//         datePublished.innerText = postData.date_gmt.substring(0, 10);

//         const postContent = document.createElement('div');
//         postContent.classList.add('blog-post-text');
//         postContent.innerHTML = postData.content.rendered;

//         const container = document.querySelector('.container-post');
//         container.innerHTML = ''; // Clear the container

//         // Append new elements to the container
//         container.appendChild(postTitle);
//         container.appendChild(datePublished);
//         container.appendChild(postContent);

//         // Check if the post has a featured image
//         if (postData.featured_media) {
//             // Fetch featured image data
//             const mediaResponse = await fetch(`http://lenore-poe.local/wp-json/wp/v2/media/${postData.featured_media}`);
//             const mediaData = await mediaResponse.json();

//             // Extract the featured image URL
//             const featuredImageUrl = mediaData.source_url;

//             // Create and append image element
//             const postImage = document.createElement('img');
//             postImage.classList.add('blog-post-img');
//             postImage.src = featuredImageUrl;
//             postImage.alt = postData.title.rendered; // Use post title as alt text
//             container.appendChild(postImage);

//             // Add click event listener to open featured image in new window
//             postImage.addEventListener('click', () => {
//                 window.open(featuredImageUrl, '_blank', 'width=800,height=600');
//             });
//         }
//     } catch (error) {
//         console.log('Error fetching post:', error);
//     }
// }

// fetchPost();
