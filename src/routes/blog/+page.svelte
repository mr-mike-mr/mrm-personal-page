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
    // load data from +page.server.js
    /** @type {import('./$types').PageProps} */
	let { data } = $props();

    // text for search blog posts
    let blog_post_search_text = $state("");

    // blog search function
    function blog_search() {
        // TODO:
    }

    // last post id
    let last_post_id = 0;
    // visibility for show more button
    let visibility_show_more_button = $state(true);

    // if new post id is same from last post id
    if (data.blog_posts[0].id === last_post_id) {
        visibility_show_more_button = false; // hide button
    } else {
        visibility_show_more_button = true; // show button
    }

    // update last post id
    last_post_id = data.blog_posts[0].id

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


    {#if data.blog_posts.length}
        {#each data.blog_posts as blog_post}
            <div class="post">
                <img alt="Blog banner" src={"/blog_posts/"+blog_post.thumbnail} />
                <div>
                    {#if $lang === "en"} <!-- if english lang selected -->
                        <a class="blog_post_heading" target="_blank" href={blog_post.link}>{blog_post.title_en}</a>
                        <p>{blog_post.description_en}</p>
                    {:else if $lang === "sk"} <!-- if slovak lang selected -->
                        <a class="blog_post_heading" target="_blank" href={blog_post.link}>{blog_post.title_sk}</a>
                        <p>{blog_post.description_sk}</p>
                    {/if}
                </div>
            </div>
        {/each}

        {#if visibility_show_more_button}
            <button onclick={load_more}><img alt="Recycling symbol emoji" src={recycling_symbol_emoji_emoji} /> {locales[$lang]["46"]}</button>
        {/if}
    {:else}
        <p class="not_found_data">{locales[$lang]["48"]}</p>
    {/if}
</div>