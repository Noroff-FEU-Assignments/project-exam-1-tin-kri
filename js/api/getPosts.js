import { API_URL } from "../constants/constants.js";



//displays data //
function displayPosts(posts) {
    for (let i = 0; i < posts.length; i++) {
        const title = posts[i].title;
        const excerpt = posts[i].excerpt;
        console.log('Title', title, 'Excerpt', excerpt);
    }
}



//used to fetch any API / data //
async function doFetch(url) {
    try {
        const response = await fetch(url);
        const json = await response.json();
        return json;
    } catch (error) {
        console.log('Error fetching', error);
    }
}


//main function henter data med doFetch//
//og med displayPosts så viser den dataen//
async function main() {
    const posts = await doFetch(API_URL);
    displayPosts(posts);
}

main();



