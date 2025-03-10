<!-- SCRIPT -->
<script>
	// import libs
	import locales from '$lib/locales.json';
	import tech from '$lib/lists/techs_list.json';
    import SvelteSeo from "svelte-seo";
	// import stores
	import { lang } from '$lib/stores/user_store.js';
</script>

<!-- SEO -->
<SvelteSeo title = "Tech | Mike Personal Page"/>

<!-- TECH ROOT -->
<div class='tech_root'>
    {#if tech.lines.length}
        {#each tech.lines as line}
            <!-- LINE TEXT -->
            <div class='line_text'>{ $lang === 'en' ? line.title_en : line.title_sk }</div>

            <!-- TECH CONTAINER -->
            <div class='tech_container'>
                {#each tech.tech_list[line.id] as _tech}
                    <!-- TECH -->
                    <div>
                        <img alt='Tech' src={`/tech/${_tech.image}`} />
                        <a target='_blank' href={_tech.link}>{ $lang === 'en' ? _tech.title_en : _tech.title_sk }</a>
                    </div>
                {/each}
            </div>
        {/each}
    {:else}
        <!-- NOT FOUND DATA MESSAGE -->
        <p class='not_found_data'>{locales[$lang]['50']}</p>
    {/if}
</div>