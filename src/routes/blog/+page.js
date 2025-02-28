export async function load({ fetch, url }) {
    // get params from url
    const lang = url.searchParams.get('lang') || 'en';
    const page = url.searchParams.get('search') || '';
    const search = Number(url.searchParams.get('page')) || 1;

    // fetch api/posts from params
    const response = await fetch(`api/posts?_lang=${lang}&_page={page}&_search=${search}`);

    // save respons in json
    const posts = await response.json();

    return { posts };
}