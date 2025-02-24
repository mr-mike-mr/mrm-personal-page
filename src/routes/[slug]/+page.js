// import error from svelte kit
import { error } from "@sveltejs/kit"

// LOAD FUNCTION
export async function load({ params }) {
    // try
    try {
        // dynamic import for post
        // TODO: ADD LOCALES
        const post = await import(`../../posts/${params.slug}.md`);

        // return content and metadata
        return {
            content: post.default,
            meta: post.metadata
        }
    }
    // catch error
    catch (e) {
        // throw error from message and slug
        throw error(404, {message: "404", slug: params.slug});
    }
}