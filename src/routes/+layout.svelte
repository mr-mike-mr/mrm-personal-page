<script>
	// get layout children
	let { children } = $props();
	// import libs
	import Cookies from "js-cookie";
	import locales from "$lib/locales.json";
	import { set_cookie } from "$lib/index.js";
	// import stores
	import { lang } from "$lib/stores/user_store.js";
	// import svelte libs
	import { onMount } from "svelte";
	// import assets
	import home_emoji from "$lib/assets/emojis/home_emoji.png";
	import graduation_cap_emoji from "$lib/assets/emojis/graduation_cap_emoji.png";
	import framed_picture_emoji from "$lib/assets/emojis/framed_picture_emoji.png";
	import computer_emoji from "$lib/assets/emojis/computer_emoji.png";
	import globe_emoji from "$lib/assets/emojis/globe_emoji.png";
	import flag_us_emoji from "$lib/assets/emojis/flag_us_emoji.png";
	import flag_sk_emoji from "$lib/assets/emojis/flag_sk_emoji.png";
	import moon_emoji from "$lib/assets/emojis/moon_emoji.png";
	import sun_emoji from "$lib/assets/emojis/sun_emoji.png";

	// vars
	let cookies_allowed = $state(false);
	let dark_mode = $state(true);

	// func for change web site language
	function change_language() {
		// if lang var is "en"
		if ($lang === "en") {
			// change lang var
			lang.set($lang = "sk");
			// call func for set cookie
			set_cookie("lang", "sk");
		} else {
			// change lang var
			lang.set($lang = "en");
			// call func for set cookie
			set_cookie("lang", "en");
		}
	}

	// func for change  theme
	function change_theme() {
		// negates value for dark mode
		dark_mode = !dark_mode;
		// add call list for html element
		document.documentElement.classList.add(dark_mode ? "dark" : "light");
		// remove call list for html element
		document.documentElement.classList.remove(dark_mode ? "light" : "dark");
		// set theme cookie
		set_cookie("theme", dark_mode ? "dark" : "light");
	}

	// callback when components are loaded
	onMount(() => {
		// check cookies permissions
		cookies_allowed = Cookies.get("cookie_allow");

		// when cookies are allowed
		if (cookies_allowed) {
			// get lang and theme cookie
			let lang_cookie = Cookies.get("lang");
			let theme_cookie = Cookies.get("theme");

			// if lang/theme cookie have value
			if (lang_cookie != undefined) lang.set($lang = lang_cookie);
			if (theme_cookie != undefined) {
				// if theme cookie have value "dark"
				dark_mode = theme_cookie === "dark";
				// add call list for html element
				document.documentElement.classList.add(dark_mode ? "dark" : "light");
				// remove call list for html element
				document.documentElement.classList.remove(dark_mode ? "light" : "dark");
			}
		}
	});
</script>

<!-- HEADER -->
<header>
	<!-- NAV -->
	<nav>
		<!-- ROUTS LIST -->
		<ul class="routes">
			<li><a href="/"><img alt="Home emoji" src={home_emoji} />{locales[$lang]["1"]}</a></li>
			<li><a href="/skills"><img alt="Graduation cap emoji" src={graduation_cap_emoji} />{locales[$lang]["2"]}</a></li>
		    <!-- svelte-ignore a11y_img_redundant_alt -->
			<li><a href="/projects"><img alt="Framed picture emoji" src={framed_picture_emoji} />{locales[$lang]["3"]}</a></li>
			<li><a href="/tech"><img alt="Computer emoji" src={computer_emoji} />{locales[$lang]["4"]}</a></li>
			<li><a href="/blog"><img alt="Globe emoji" src={globe_emoji} />{locales[$lang]["5"]}</a></li>
		</ul>
		<!-- PAGE SETTINGS LIST -->
		<ul class="page_settings">
			<!-- CHANGE LANGUAGE -->
			<li>
			    <!-- svelte-ignore event_directive_deprecated -->
				<button on:click={change_language}>
					{#if $lang === "en"}
						<img alt="Flag US emoji" src={flag_us_emoji} />
					{:else}
						<img alt="Flag SK emoji" src={flag_sk_emoji} />
					{/if}
				</button>
			</li>
			<!-- CHANGE THEME -->
			<li>
				<!-- svelte-ignore event_directive_deprecated -->
				<button on:click={change_theme}>
					{#if dark_mode}
						<img alt="Moon emoji" src={moon_emoji} />
					{:else}
						<img alt="Sun emoji" src={sun_emoji} />
					{/if}
				</button>
			</li>
		</ul>
	</nav>
</header>

<!-- when a permision cookie does not exist -->
{#if cookies_allowed === undefined}
	<!-- COOKIES ALLOW REQUEST -->
	<div class="cookies_allow_request">
		<!-- HEADING -->
		<h1>{locales[$lang]["6"]}</h1>
		<!-- PARAGRAPH -->
		<p>{locales[$lang]["7"]}</p>
		<!-- BUTTONS -->
		<div>
			<!-- AGREE BUTTON -->
			<!-- svelte-ignore event_directive_deprecated -->
			<button class="agree_button" on:click={()=> {Cookies.set("cookie_allow", "true", { expires: 365, secure: true, sameSite:"strict", domain: window.location.hostname }); cookies_allowed = true;}}>{locales[$lang]["8"]}</button>
			<!-- DISAGREE BUTTON -->
			<!-- svelte-ignore event_directive_deprecated -->
			<button class="disagree_button"  on:click={()=> {Cookies.set("cookie_allow", "false", { expires: 1, secure: true, sameSite:"strict", domain: window.location.hostname }); cookies_allowed = false;}}>{locales[$lang]["9"]}</button>
		</div>
	</div>
{:else}
	<!-- RENDER CHILDREN -->
	{@render children()}
{/if}

<!-- FOOTER -->
<footer>&#169; MR.MIKE$</footer>