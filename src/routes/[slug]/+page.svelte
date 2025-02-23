<script>
    // get props from +page.js
	/** @type {import('./$types').PageProps} */
	let { data } = $props();

    const tags = [];

    data.meta.tags.forEach(tag => {
        tags.push("#"+tag);
    })
</script>

<svelte:head>
    <title>{data.meta.title}</title>
    <meta property="og:type" content="article">
    <meta property="og:title" content={data.meta.title}>
    <meta property="og:description" content={data.meta.description}>
</svelte:head>

<article class="blog_post">
    <hgroup>
        <h1>{data.meta.title}</h1>
        <p class="post_description">Published at {new Date(data.meta.date).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}</p>
        <p class="post_tags">{tags.toString().replace(",", " ")}</p>
    </hgroup>

    <div class="pots_content">
        <data.content />
    </div>
</article>