// import svelte libs
import { error } from '@sveltejs/kit'

// LOAD FUNCTION
export async function load({ params, url }) {
    // TRY
    try {
        // get lang param from url
        const lang = await url.searchParams.get('lang') || 'en';

        // dynamic import for post by lang
        const post = await import(`../../../posts/${lang}/${params.slug}.md`);

        // formate tags to string
        const tags = [];
        post.metadata.tags.forEach(tag => tags.push(`#${tag}`) );
        post.metadata.tags_string = tags.toString().replace(',', ' ');

        return {
            content: post.default,
            meta: post.metadata
        }
    }
    // CATCH
    catch (e) {
        throw error(404, {message: '404', slug: params.slug});
    }
}