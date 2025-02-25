<!-- SCRIPT -->
<script>
    // get props from +page.js
	/** @type {import('./$types').PageProps} */
	let { data } = $props();

    // post tags
    const tags = [];
    // for each tags from metadata
    data.meta.tags.forEach(tag => {
        // add into tags from #
        tags.push("#"+tag);
    })
</script>

<!-- HEAD -->
<svelte:head>
    <!-- TITLE -->
    <title>{data.meta.title}</title>
    <!-- OPEN GRAPH TAGS -->
    <meta property="og:type" content="article">
    <meta property="og:title" content={data.meta.title}>
    <meta property="og:description" content={data.meta.description}>
</svelte:head>

<!-- BLOG POST -->
<article class="blog_post">
    <!-- HGROUP -->
    <hgroup>
        <!-- POST TITLE -->
        <h1 class="post_title">{data.meta.title}</h1>
        <!-- POST DATE -->
        <p class="post_date">{new Date(data.meta.date).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}</p>
        <!-- POST TAGS -->
        <p class="post_tags">{tags.toString().replace(",", " ")}</p>
    </hgroup>

    <!-- BREAK LINE -->
    <hr>

    <!-- POST CONTENT -->
    <div class="post_content">
        <!-- DATA CONTENT COMPONENT -->
        <data.content />
    </div>
</article>