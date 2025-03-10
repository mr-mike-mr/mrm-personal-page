<!-- SCRIPT -->
<script>
	// import libs
	import locales from '$lib/locales.json';
	import projects from '$lib/lists/projects_list.json';
    import SvelteSeo from "svelte-seo";
	// import stores
    import { lang } from '$lib/stores/user_store.js';
</script>

<!-- SEO -->
<SvelteSeo title = "Projects | Mike Personal Page"/>

<!-- PROJECTS ROOT -->
<div class='projects_root'>
    {#if projects.list.length}

        <!-- PROJECT -->
        {#each projects.list as project}
            <div class='project'>
                <!-- IMAGE AND HEADING -->
                <div>
                    <!-- IMAGE -->
                    <img alt='Project screenshot' src={`/projects/${project.image}`} />
                    <!-- HEADING -->
                    <h1>{project.heading}</h1>
                    <!-- DESCRIPTION -->
                    <p>{ $lang === 'en' ? project.description_en : project.description_sk }</p>

                </div>
                <!-- LINK -->
                <a href={project.link} target='_blank'>{locales[$lang]['13']}</a>
            </div>
        {/each}

    {:else}
        <!-- NOT FOUND DATA MESSAGE -->
        <p class='not_found_data'>{locales[$lang]['47']}</p>
    {/if}
</div>