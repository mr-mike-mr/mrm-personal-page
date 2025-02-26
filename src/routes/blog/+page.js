export async function load({ fetch, url }) {
    // get page param from url
    const current_page = Number(url.searchParams.get('page')) || 1;

    // fetch api/posts from current page param
    const response = await fetch(`api/posts?_page=${current_page}`);

    // save respons in json
    const posts = await response.json();

    return { posts };
}