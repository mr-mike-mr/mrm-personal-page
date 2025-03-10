<!-- SCRIPT -->
<script>
    // import libs
    import SvelteSeo from "svelte-seo";

    // get props from +page.js
	/** @type {import('./$types').PageProps} */
	let { data } = $props();
</script>

<!-- SEO -->
<SvelteSeo
    title = {`${data.meta.title} | Mike Personal Page`}
    description = {data.meta.description}
    openGraph = {{
        title: `${data.meta.title} | Mike Personal Page`,
        description: data.meta.description,
      }}

    twitter={{
        title: `${data.meta.title} | Mike Personal Page`,
        description: data.meta.description,
    }}
/>

<!-- BLOG POST -->
<article class='blog_post'>
    <!-- HGROUP -->
    <hgroup>
        <h1 class='post_title'>{data.meta.title}</h1>
        <p class='post_date'>{new Date(data.meta.date).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}</p>
        <p class='post_tags'>{data.meta.tags_string}</p>
    </hgroup>

    <!-- BREAK LINE -->
    <hr>

    <!-- POST CONTENT -->
    <div class='post_content'>
        <!-- DATA CONTENT COMPONENT -->
        <data.content />
    </div>
</article>