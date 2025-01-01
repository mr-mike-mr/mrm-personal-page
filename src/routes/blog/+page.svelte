<script>
	// import assets
	import magnifying_glass_emoji from "$lib/assets/emojis/magnifying_glass_emoji.png";
	import recycling_symbol_emoji_emoji from "$lib/assets/emojis/recycling_symbol_emoji.png";
	import blog_banner_example from "$lib/assets/blog_banner_example.png";

    let blog_search_text = "";

    // Blog search function
    function blog_search() {
        // TODO:
    }

    // Load more function
    function load_more() {
        // TODO:
    }
</script>

<div class="blog_root">
	<input class="blog_search_bar" type="text" bind:value={blog_search_text} />
    <button on:click={blog_search}><img alt="Magnifying glass emoji" src={magnifying_glass_emoji} /></button>

    <div class="blog">
        <div>
            <img alt="Blog banner example" src={blog_banner_example} />
            <p>This is details for my post...</p>
        </div>
        <a target="_blank" href="https://example.com">This is my post</a>
    </div>

    <button on:click={blog_search}><img alt="Recycling symbol emoji" src={recycling_symbol_emoji_emoji} /></button>
</div>