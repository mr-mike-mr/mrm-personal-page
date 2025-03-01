<!-- SCRIPT -->
<script>
	// import libs
	import locales from '$lib/locales.json';
	import skills from '$lib/lists/skills_list.json';
	// import stores
	import { lang } from '$lib/stores/user_store.js';
</script>

<!-- SKILLS ROOT -->
<div class='skills_root'>
    {#if skills.list.length}
        {#each skills.list as skill}
            <!-- SKILL -->
            <div>
                <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><title>{skill.title}</title><path style={`fill: ${skill.svg_color};`} d={skill.svg}/></svg>
                <a target='_blank' href={skill.link}>{skill.title}</a>
            </div>
        {/each}
    {:else}
        <!-- NOT FOUND DATA MESSAGE -->
        <p class='not_found_data'>{locales[$lang]['47']}</p>
    {/if}
</div>