<!-- SCRIPT -->
<script>
	// import assets
	import home_emoji from '$lib/assets/emojis/home_emoji.png';
	import light_bulb_emoji from '$lib/assets/emojis/light_bulb_emoji.png';
	import framed_picture_emoji from '$lib/assets/emojis/framed_picture_emoji.png';
	import computer_emoji from '$lib/assets/emojis/computer_emoji.png';
	import globe_emoji from '$lib/assets/emojis/globe_emoji.png';
	import flag_us_emoji from '$lib/assets/emojis/flag_us_emoji.png';
	import flag_sk_emoji from '$lib/assets/emojis/flag_sk_emoji.png';
	import moon_emoji from '$lib/assets/emojis/moon_emoji.png';
	import sun_emoji from '$lib/assets/emojis/sun_emoji.png';
	// import svelte libs
	import { onMount } from 'svelte';
	import { innerWidth } from 'svelte/reactivity/window';
	// import libs
	import locales from '$lib/locales.json';
	import { set_url_params } from '$lib/utilities.js';
	// import stores
	import { lang } from '$lib/stores/user_store.js';

	// get layout children
	let { children } = $props();

	let dark_mode = $state(true);
	let change_lang_cooldown = $state(false);
	let change_theme_cooldown = $state(false);

	// func for change web site language
	async function change_language() {
		if ($lang === 'en') {
			// change lang in stores
			lang.set($lang = 'sk');
			localStorage.setItem('lang', 'sk');
		} else {
			// change lang in stores
			lang.set($lang = 'en');
			localStorage.setItem('lang', 'en');
		}

		// refresh page
		location.reload(true);
	}

	// func for change theme
	async function change_theme() {
        // cooldown
		change_theme_cooldown = true;
		setTimeout(() => change_theme_cooldown = false, 500);

		dark_mode = !dark_mode;

		// add call list for html element
		document.documentElement.classList.add(dark_mode ? 'dark' : 'light');
		// remove call list for html element
		document.documentElement.classList.remove(dark_mode ? 'light' : 'dark');

		localStorage.setItem('theme', dark_mode ? 'dark' : 'light');
	}

	// callback when components are loaded
	onMount(() => {
        // cooldown
		change_lang_cooldown = true;
		setTimeout(() => change_lang_cooldown = false, 1500);

		// get lang and theme from local store
		const lang_store = localStorage.getItem('lang');
		const theme_store = localStorage.getItem('theme');

		// set lang and theme
		if (lang_store) lang.set($lang = lang_store);
		if (theme_store) dark_mode = theme_store === 'dark';

		// set url param lang
		set_url_params('lang', lang_store, true);
	});
</script>

<!-- HEADER -->
<header>
	<!-- NAV -->
	<nav>
		<!-- ROUTS LIST -->
		<ul class='routes'>
			<li><a href='/'><img alt='Home emoji' src={home_emoji} />{locales[$lang]['1']}</a></li>
			<li><a href='/skills'><img alt='Graduation cap emoji' src={light_bulb_emoji} />{locales[$lang]['2']}</a></li>
			<li><a href='/projects'><img alt='Frame emoji' src={framed_picture_emoji} />{locales[$lang]['3']}</a></li>
			<li><a href='/tech'><img alt='Computer emoji' src={computer_emoji} />{locales[$lang]['4']}</a></li>
			<li><a href={`/blog?lang=${$lang}&page=1&search=`}><img alt='Globe emoji' src={globe_emoji} />{locales[$lang]['5']}</a></li>
		</ul>

		<!-- PAGE SETTINGS LIST -->
		<ul class='page_settings'>
			<!-- CHANGE LANGUAGE -->
			<li>
				<button onclick={change_language} disabled={change_lang_cooldown}>
					{#if $lang === 'en'}
						<img alt='Flag US emoji' src={flag_us_emoji} />
					{:else}
						<img alt='Flag SK emoji' src={flag_sk_emoji} />
					{/if}
				</button>
			</li>

			<!-- CHANGE THEME -->
			<li>
				<button onclick={change_theme} disabled={change_theme_cooldown}>
					{#if dark_mode}
						<img alt='Moon emoji' src={moon_emoji} />
					{:else}
						<img alt='Sun emoji' src={sun_emoji} />
					{/if}
				</button>
			</li>
		</ul>
	</nav>
</header>

<!-- RENDER CHILDREN -->
{@render children()}

<!-- FOOTER -->
<footer>&#169; MR.MIKE$</footer>