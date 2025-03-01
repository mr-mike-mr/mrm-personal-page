// import svelte libs
import { json } from '@sveltejs/kit';
// import libs
import { string } from '$env/static/private';

async function getPosts(url = '') {
    // get params from url
    const lang = url.searchParams.get('_lang') || 'en';
    const page = Number(url.searchParams.get('_page')) || 1;
    const search = url.searchParams.get('_search') || '';

    let posts = [];

    const paths = import.meta.glob(`/src/posts/*/*.md`, {eager: true})

    for (const path in paths) {
        // lang switch
        const file = paths[path];
        if (path.split('/')[3] != lang) continue;

        const slug = path.split('/').at(-1)?.replace('.md', '');

        // metadata search
        const metadata = file.metadata;
        if (search) {
            // split search by word space into array and filter out empty strings
            const search_words = search.split(/\s+/).filter(word => word.trim() !== '');

            // normalize search words (remove diacritics and escape special characters)
            const normalized_search_words = search_words.map(word =>
                // remove diacritic from word
                word.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
            );

            // create dynamic regex pattern
            const search_regex_pattern = normalized_search_words.map(word => `(?=.*\\b${word}\\b)`).join('');
            const search_regex = new RegExp(search_regex_pattern, 'gi');

            // remove diacritic from metadatas
            const normalized_title = metadata.title.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            const normalized_description = metadata.description.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            const normalized_tags = metadata.tags.map(tag => tag.normalize('NFD').replace(/[\u0300-\u036f]/g, ''));

            // search options for match posts
            const has_match = (
                // title
                search_regex.test(normalized_title) ||
                // description
                search_regex.test(normalized_description) ||
                // tags
                normalized_tags.some(tag => search_regex.test(tag))
            );

            if (!has_match) continue;
        }

        // formate tags to string
        const tags = [];
        metadata.tags.forEach(tag => tags.push(`#${tag}`) );
        metadata.tags_string = tags.toString().replace(',', ' ');

        const post = {...metadata, slug};
        posts.push(post);
    }

    // sort by date
    posts = posts.sort(
        (first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
    )

    // get start index for posts slice
    const page_post_start_index = (page - 1) * 10;

    return {
        posts: posts.slice( page_post_start_index , page_post_start_index+10 ),
        remaining_pages: ~~(posts.length / 10) + 1
    };
}

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
    const posts = await getPosts(url);
    return json(posts);
}