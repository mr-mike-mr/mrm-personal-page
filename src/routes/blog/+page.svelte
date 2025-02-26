<!-- SCRIPT -->
<script>
	// import assets
	import magnifying_glass_emoji from '$lib/assets/emojis/magnifying_glass_emoji.png';
	// import svelte libs
	import { onMount } from 'svelte';
	// import libs
	import locales from '$lib/locales.json';
	// import stores
	import { lang } from '$lib/stores/user_store.js';

    // get props from +page.js
	/** @type {import('./$types').PageProps} */
	let { data } = $props();

    // for each tags from metadata for all posts
    data.posts.forEach(post => {
        const tags = [];

        post.tags.forEach( tag => tags.push(`#${tag}`) );

        post.tags = tags;
    })

    // TODO: search bar + pagination
    let blog_post_search_text = $state('');

    // save reference for input element for autofocus
    let autofocus_input;

	// callback when components are loaded
    onMount(() => {
        // autofocus on input element
        autofocus_input?.focus();
    });
</script>

<!-- BLOG ROOT -->
<div class='blog_root'>
    <!-- BLOG SEARCH -->
    <form class='blog_search'>
        <!-- INPUT -->
    	<input class='blog_search_bar' type='text' bind:this={autofocus_input} bind:value={blog_post_search_text} autocomplete='off' autocorrect='off' placeholder={locales[$lang]['45']}/>
        <!-- BUTTON -->
        <button><img alt='Magnifying glass emoji' src={magnifying_glass_emoji} /></button>
    </form>

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
                    <p class='post_tags'>{blog_post.tags.toString().replace(',', ' ')}</p>
                </li>
            {/each}

        </ul>

    {:else}
        <!-- NOT FOUND DATA MESSAGE -->
        <p class='not_found_data'>{locales[$lang]['48']}</p>
    {/if}

</div>