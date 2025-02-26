<!-- SCRIPT -->
<script>
	// import libs
	import locales from '$lib/locales.json';
	import projects from '$lib/projects_list.json';
	// import stores
    import { lang } from '$lib/stores/user_store.js';
</script>

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
                    {#if $lang === 'en'} <!-- if english lang selected -->
                        <p>{project.description_en}</p>
                    {:else if $lang === 'sk'} <!-- if slovak lang selected -->
                        <p>{project.description_sk}</p>
                    {/if}

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