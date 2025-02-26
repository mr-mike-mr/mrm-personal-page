<!-- SCRIPT -->
<script>
    // get props from +page.js
	/** @type {import('./$types').PageProps} */
	let { data } = $props();

    // for each tags from metadata
    const tags = [];
    data.meta.tags.forEach(tag => tags.push(`#${tag}`) );
</script>

<!-- HEAD -->
<svelte:head>
    <!-- TITLE -->
    <title>{data.meta.title}</title>
    <!-- OPEN GRAPH TAGS -->
    <meta property='og:type' content='article'>
    <meta property='og:title' content={data.meta.title}>
    <meta property='og:description' content={data.meta.description}>
</svelte:head>

<!-- BLOG POST -->
<article class='blog_post'>
    <!-- HGROUP -->
    <hgroup>
        <h1 class='post_title'>{data.meta.title}</h1>
        <p class='post_date'>{new Date(data.meta.date).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}</p>
        <p class='post_tags'>{tags.toString().replace(',', ' ')}</p>
    </hgroup>

    <!-- BREAK LINE -->
    <hr>

    <!-- POST CONTENT -->
    <div class='post_content'>
        <!-- DATA CONTENT COMPONENT -->
        <data.content />
    </div>
</article>