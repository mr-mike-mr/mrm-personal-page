<!-- SCRIPT -->
<script>
	// import assets
	import magnifying_glass_emoji from '$lib/assets/emojis/magnifying_glass_emoji.png';
	import left_arrow_emoji from '$lib/assets/emojis/left_arrow_emoji.png';
	import right_arrow_emoji from '$lib/assets/emojis/right_arrow_emoji.png';
	// import svelte libs
	import { onMount } from 'svelte';
	// import libs
	import locales from '$lib/locales.json';
    import { set_url_params } from '$lib/utilities';
    import SvelteSeo from "svelte-seo";
	// import stores
	import { lang } from '$lib/stores/user_store.js';

    // get props from +page.js
	/** @type {import('./$types').PageProps} */
	let { data } = $props();

    // search bar
    let blog_post_search_text = $state('');
    let search_posts_cooldown = $state(false);

    async function search_posts() {
        // cooldown
		search_posts_cooldown = true;
		setTimeout(() => search_posts_cooldown = false, 750);

        // set url params
        set_url_params('search', blog_post_search_text, true);
    }

    // TODO: pagination
    let current_blog_page = $state(1);
    let remaining_blog_page = $state(data.posts.remaining_pages);
    let pagination_cooldown = $state(false)

    async function before_page() {
        // cooldown
		pagination_cooldown = true;
		setTimeout(() => pagination_cooldown = false, 750);

        if (current_blog_page < 2) return;

        current_blog_page--

        // set url params
        set_url_params('page', current_blog_page, true);
    }

    async function next_page() {
        // cooldown
		pagination_cooldown = true;
		setTimeout(() => pagination_cooldown = false, 750);

        if (current_blog_page == remaining_blog_page) return;

        current_blog_page++

        // set url params
        set_url_params('page', current_blog_page, true);
    }

	// callback when components are loaded
	onMount(() => {
        // get params from url
        const url = new URL(window.location.href);
        const search = url.searchParams.get('search') || '';
        const page = Number(url.searchParams.get('page')) || 1;

        // set vars by url params
        blog_post_search_text = search;
        current_blog_page = page;
	});
</script>

<!-- SEO -->
<SvelteSeo title = "Blog | Mike Personal Page"/>

<!-- BLOG ROOT -->
<div class='blog_root'>
    <!-- BLOG SEARCH -->
    <div class='blog_search'>
        <!-- INPUT -->
    	<input class='blog_search_bar' type='text' bind:value={blog_post_search_text} onkeydown={ (event) => { event.key === 'Enter' && search_posts(); } } autocomplete='off' autocorrect='off' placeholder={locales[$lang]['45']}/>

        <!-- BUTTON -->
        <button onclick={search_posts} disabled={search_posts_cooldown}><img alt='Magnifying glass emoji' src={magnifying_glass_emoji} /></button>
    </div>

    {#if data.posts.posts.length}
        <!-- BLOG POSTS -->
        <ul class='blog_posts'>

            <!-- POST -->
            {#each data.posts.posts as blog_post}
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

        {#if remaining_blog_page > 1}
            <!-- PAGINATION -->
            <div class='pagination'>
                <button onclick={ before_page } class='before_page' disabled={ pagination_cooldown } style={ `visibility: ${current_blog_page < 2 ? 'hidden' : 'visible'};` }><img alt='Left arrow emoji' src={left_arrow_emoji} /></button>
                <p class='page_counter'>{`${current_blog_page}/${remaining_blog_page}`}</p>
                <button onclick={ next_page } class='next_page' disabled={ pagination_cooldown } style={ `visibility: ${current_blog_page == remaining_blog_page ? 'hidden' : 'visible'};` }><img alt='Right arrow emoji' src={right_arrow_emoji} /></button>
            </div>
        {/if}

    {:else}
        <!-- NOT FOUND data MESSAGE -->
        <p class='not_found_data'>{locales[$lang]['48']}</p>
    {/if}

</div>