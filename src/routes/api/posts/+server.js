// import svelte libs
import { json } from '@sveltejs/kit';
// import libs
import { string } from '$env/static/private';

async function getPosts(url = '') {
    // get params from url
    const lang = url.searchParams.get('lang') || 'en';
    const page = url.searchParams.get('search') || '';
    const search = Number(url.searchParams.get('page')) || 1;

    let posts = [];

    const paths = import.meta.glob(`/src/posts/*/*.md`, {eager: true})

    for (const path in paths) {
        const file = paths[path];

        if (path.split('/')[3] != lang) continue;

        const slug = path.split('/').at(-1)?.replace('.md', '');
        const metadata = file.metadata;
        const post = {...metadata, slug};
        posts.push(post);
    }

    posts = posts.sort(
        (first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
    )

    return posts;
}

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
    const posts = await getPosts(url);
    return json(posts);
}