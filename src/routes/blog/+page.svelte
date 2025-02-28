<!-- SCRIPT -->
<script>
	// import assets
	import magnifying_glass_emoji from '$lib/assets/emojis/magnifying_glass_emoji.png';
	// import svelte libs
	import { onMount } from 'svelte';
	// import libs
	import locales from '$lib/locales.json';
    import { set_url_params } from '$lib/utilities';
	// import stores
	import { lang } from '$lib/stores/user_store.js';

    // get props from +page.js
	/** @type {import('./$types').PageProps} */
	let { data } = $props();

    // TODO: fetch posts
    async function fetch_posts() {
        // get params from url
        const url = new URL(window.location.href);
        const lang = url.searchParams.get('lang') || 'en';
        const page = Number(url.searchParams.get('page')) || 1;
        const search = url.searchParams.get('search') || '';

        // fetch api/posts from params
        const response = await fetch(`api/posts?_lang=${lang}&_page={page}&_search=${search}`);

        // save respons in json
        const posts = await response.json();
    }

    // TODO: search bar
    let blog_post_search_text = $state('');
    let search_posts_cooldown = $state(false);

    async function search_posts() {
        // cooldown
		search_posts_cooldown = true;
		setTimeout(() => search_posts_cooldown = false, 1000);

        // set url params
        set_url_params('search', blog_post_search_text, true);
    }

    // TODO: pagination
    let blog_page = $state(1);

	// callback when components are loaded
	onMount(() => {
        // get params from url
        const url = new URL(window.location.href);
        const search = url.searchParams.get('search') || '';
        const page = Number(url.searchParams.get('page')) || 1;

        // set params
        blog_post_search_text = search;
        blog_page = page;
	});
</script>

<!-- BLOG ROOT -->
<div class='blog_root'>
    <!-- BLOG SEARCH -->
    <div class='blog_search'>
        <!-- INPUT -->
    	<input class='blog_search_bar' type='text' bind:value={blog_post_search_text} onkeydown={ (event) => { event.key === 'Enter' && search_posts(); } } autocomplete='off' autocorrect='off' placeholder={locales[$lang]['45']}/>

        <!-- BUTTON -->
        <button onclick={fetch_posts} disabled={search_posts_cooldown}><img alt='Magnifying glass emoji' src={magnifying_glass_emoji} /></button>
    </div>

    {#if data.posts.length}
        <!-- BLOG POSTS -->
        <ul class='blog_posts'>

            <!-- POST -->
            {#each data.posts as blog_post}
                <li>
                    <!-- HEADING -->
                    <a href={`/blog/${blog_post.slug}`} target='_self' class='post_title'>{blog_post.title}</a>
                    <!-- DESCRIPTION -->
                    <p class='post_description'>{blog_post.description}</p>
                    <!-- DATE -->
                    <p class='post_date'>{new Date(blog_post.date).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}</p>
                    <!-- TAGS -->
                    <p class='post_tags'>{blog_post.tags_string}</p>
                </li>
            {/each}

        </ul>

    {:else}
        <!-- NOT FOUND DATA MESSAGE -->
        <p class='not_found_data'>{locales[$lang]['48']}</p>
    {/if}

</div>