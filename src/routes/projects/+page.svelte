<!-- SCRIPT -->
<script>
	// import libs
	import locales from "$lib/locales.json";
	// import stores
	import { lang } from "$lib/stores/user_store.js";
    // load data from +page.server.js
    /** @type {import('./$types').PageProps} */
	let { data } = $props();
</script>

<!-- PROJECTS ROOT -->
<div class="projects_root">
    {#each data.projects as project}
        <div class="project">
            <!-- IMAGE AND HEADING -->
            <div>
                <!-- IMAGE -->
                <img alt="Project screenshot" src={"/projects/"+project.image} />
                <!-- HEADING -->
                <h1>{project.heading}</h1>
                <!-- DESCRIPTION -->
                {#if $lang === "en"} <!-- if english lang selected -->
                    <p>{project.description_en}</p>
                {:else if $lang === "sk"} <!-- if slovak lang selected -->
                    <p>{project.description_sk}</p>
                {/if}

            </div>
            <!-- LINK -->
            <a target="_blank" href={project.links}>{locales[$lang]["13"]}</a>
        </div>
    {/each}
</div>