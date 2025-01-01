<script>
	// import assets
	import pfp_image from "$lib/assets/mike-pfp.jpg";
	import waving_hand_emoji from "$lib/assets/emojis/waving_hand_emoji.png";
    import github_icon from "$lib/assets/icons/github.svg";
    import spotify_icon from "$lib/assets/icons/spotify.svg";
    import protonmail_icon from "$lib/assets/icons/protonmail.svg";
</script>

<div class="main_root">
    <!-- svelte-ignore a11y_img_redundant_alt -->
    <h1>Welcome <img alt="Waving hand emoji" src={waving_hand_emoji} /></h1>

    <div class="pfp_text">
        <!-- svelte-ignore a11y_img_redundant_alt -->
        <img alt="Profile picture" src={pfp_image} />

        <div>
            <h2>MR.MIKE$</h2>
            <p>I am a developer of websites and web applications. He likes to try someing new from technology and the like. I try to write clean and elegant code that everyone can understand.</p>
            <p>My goal is to make applications that will have real use.</p>
        </div>
    </div>

    <div class="links">
        <a target="_blank" href="https://github.com/mr-mike-mr"><img alt="GitHub icon" src={github_icon} /> GitHub</a>
        <a target="_blank" href="https://open.spotify.com/user/31jqrdtnm4stjqr5hrtl4yendbta"><img alt="Spotify icon" src={spotify_icon} /> Spotify</a>
        <a target="_blank" href="mailto:mr_mike_eu@proton.me"><img alt="Proton Mail icon" src={protonmail_icon} /> Personal</a>
        <a target="_blank" href="mailto:mr_mike_business@proton.me"><img alt="Proton Mail icon" src={protonmail_icon} /> Business</a>
    </div>
</div>