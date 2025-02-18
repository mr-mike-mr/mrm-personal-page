<!-- SCRIPT -->
<script>
	// import svelte libs
	import { onMount } from "svelte";
	// import assets
	import magnifying_glass_emoji from "$lib/assets/emojis/magnifying_glass_emoji.png";
	import recycling_symbol_emoji_emoji from "$lib/assets/emojis/recycling_symbol_emoji.png";

    // text for search blog posts
    let blog_post_search_text = "";

    // save reference for input element for autofocus
    let autofocus_input;

    // blog search function
    function blog_search() {
        // TODO:
    }

    // load more function
    function load_more() {
        // TODO:
    }

	// callback when components are loaded
    onMount(() => {
        // autofocus on input element
        autofocus_input?.focus();
    });

</script>

<!-- TODO: make locales, load data from database, working functions -->

<div class="blog_root">
    <div class="blog_search">
    	<input class="blog_search_bar" type="text" bind:this={autofocus_input} bind:value={blog_post_search_text} autocomplete="off" autocorrect="off" placeholder="Search..."/>
        <button on:click={blog_search}><img alt="Magnifying glass emoji" src={magnifying_glass_emoji} /></button>
    </div>

    <div class="post">
        <img alt="Blog banner example" src="/blog_posts/blog_banner_example.png" />
        <div>
            <a class="blog_post_heading" target="_blank" href="https://example.com">This is my post</a>
            <p>This is details for my post...</p>
        </div>
    </div>

    <button on:click={load_more}><img alt="Recycling symbol emoji" src={recycling_symbol_emoji_emoji} /> Load more</button>
</div>