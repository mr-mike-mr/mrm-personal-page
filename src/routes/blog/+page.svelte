<!-- SCRIPT -->
<script>
	// import svelte libs
	import { onMount } from "svelte";
	// import libs
	import locales from "$lib/locales.json";
	// import assets
	import magnifying_glass_emoji from "$lib/assets/emojis/magnifying_glass_emoji.png";
	import recycling_symbol_emoji_emoji from "$lib/assets/emojis/recycling_symbol_emoji.png";
	// import stores
	import { lang } from "$lib/stores/user_store.js";
    // get props from +page.js
	/** @type {import('./$types').PageProps} */
	let { data } = $props();

    data.posts.forEach(post => {
        const tags = [];

        post.tags.forEach(tag => {
            tags.push("#"+tag);
        })

        post.tags = tags;
    })

    // text for search blog posts
    let blog_post_search_text = $state("");

    // blog search function
    function blog_search() {
        // TODO:
    }

    // load more function
    function load_more() {
        // TODO:
    }

    // save reference for input element for autofocus
    let autofocus_input;

	// callback when components are loaded
    onMount(() => {
        // autofocus on input element
        autofocus_input?.focus();
    });
</script>

<div class="blog_root">
    <div class="blog_search">
    	<input class="blog_search_bar" type="text" bind:this={autofocus_input} bind:value={blog_post_search_text} autocomplete="off" autocorrect="off" placeholder={locales[$lang]["45"]}/>
        <button onclick={blog_search}><img alt="Magnifying glass emoji" src={magnifying_glass_emoji} /></button>
    </div>

    {#if data.posts.length}
        {#each data.posts as blog_post}
            <ul class="blog_posts">
                <li>
                    <a href={blog_post.slug} target="_self" class="post_title">{blog_post.title}</a>
                    <p class="post_description">{blog_post.description}</p>
                    <p class="post_date">{new Date(blog_post.date).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}</p>
                    <p class="post_tags">{blog_post.tags.toString().replace(",", " ")}</p>
                </li>
            </ul>
        {/each}

        <!--{#if visibility_show_more_button}
            <button onclick={load_more}><img alt="Recycling symbol emoji" src={recycling_symbol_emoji_emoji} /> {locales[$lang]["46"]}</button>
        {/if}-->
    {:else}
        <p class="not_found_data">{locales[$lang]["48"]}</p>
    {/if}

</div>