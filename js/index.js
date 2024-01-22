

baseURL = "http://lenore-poe.local/wp-json/wp/v2/posts";
async function getPosts(url) {
    const response = await fetch(url);
    const posts = await response.json();
    console.log(posts);
}

getPosts(baseURL);