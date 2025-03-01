<!-- SCRIPT -->
<script>
	// import assets
	import pfp_image from '$lib/assets/mike-pfp.jpg';
	import waving_hand_emoji from '$lib/assets/emojis/waving_hand_emoji.png';
	// import libs
	import locales from '$lib/locales.json';
	// import stores
	import { lang } from '$lib/stores/user_store.js';
</script>

<!-- HOME ROOT -->
<div class='home_root'>
    <!-- WELCOME -->
    <h1>{locales[$lang]['10']}<img alt='Waving hand emoji' src={waving_hand_emoji} /></h1>

    <!-- PFP TEXT -->
    <div class='pfp_text'>
        <!-- PFP -->
        <img alt='Profile' src={pfp_image} />
        <!-- TEXT -->
        <div>
            <h2>MR.MIKE$</h2>
            <p>{locales[$lang]['11']}</p>
            <i>{locales[$lang]['12']}</i>
        </div>
    </div>

    <!-- LINKS -->
    <div class='links'>
        <!-- GITHUB -->
        <a target='_blank' href='https://github.com/mr-mike-mr' style='gap: 20px;'>
            <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><title>GitHub</title><path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'/></svg>
            GitHub
        </a>
        <!-- SPOTIFY -->
        <a target='_blank' href='https://open.spotify.com/user/31jqrdtnm4stjqr5hrtl4yendbta' style='gap: 15px;'>
            <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><title>Spotify</title><path style='fill: #1ed760; !important' d='M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z'/></svg>
            Spotify
        </a>
        <!-- MAIL PERSONAL -->
        <a target='_blank' href='mailto:mr_mike_eu@proton.me' style='gap: 10px;'>
            <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><title>Proton Mail</title><path style='fill: #6d4aff; !important' d='m15.24 8.998 3.656-3.073v15.81H2.482C1.11 21.735 0 20.609 0 19.223V6.944l7.58 6.38a2.186 2.186 0 0 0 2.871-.042l4.792-4.284h-.003zm-5.456 3.538 1.809-1.616a2.438 2.438 0 0 1-1.178-.533L.905 2.395A.552.552 0 0 0 0 2.826v2.811l8.226 6.923a1.186 1.186 0 0 0 1.558-.024zM23.871 2.463a.551.551 0 0 0-.776-.068l-3.199 2.688v16.653h1.623c1.371 0 2.481-1.127 2.481-2.513V2.824a.551.551 0 0 0-.129-.36z'/></svg>
            Personal
        </a>
        <!-- MAIL BUSINESS -->
        <a target='_blank' href='mailto:mr_mike_business@proton.me' style='gap: 10px;'>
            <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><title>Proton Mail</title><path style='fill: #6d4aff; !important' d='m15.24 8.998 3.656-3.073v15.81H2.482C1.11 21.735 0 20.609 0 19.223V6.944l7.58 6.38a2.186 2.186 0 0 0 2.871-.042l4.792-4.284h-.003zm-5.456 3.538 1.809-1.616a2.438 2.438 0 0 1-1.178-.533L.905 2.395A.552.552 0 0 0 0 2.826v2.811l8.226 6.923a1.186 1.186 0 0 0 1.558-.024zM23.871 2.463a.551.551 0 0 0-.776-.068l-3.199 2.688v16.653h1.623c1.371 0 2.481-1.127 2.481-2.513V2.824a.551.551 0 0 0-.129-.36z'/></svg>
            Business
        </a>
    </div>

    <!-- STATS&WIDGETSS -->
    <div class='stats_and_widgets'>
        <!-- STATS -->
        <div class='stats'>
            <!-- GITHUB PROFILE STATS -->
            <img class='github_profile_stats' src='https://github-readme-stats.vercel.app/api?username=mr-mike-mr&show_icons=true&theme=dark' alt='GitHub ptofile stats'>
            <!-- GITHUB MOST USED LANGUAGES -->
            <img src='https://github-readme-stats.vercel.app/api/top-langs/?username=mr-mike-mr&layout=compact&theme=dark' alt='GitHub most used languages'>
        </div>

        <!-- WIDGETS -->
        <div class='widgets'>
            <!-- SPOTIFY RECENTLY PLAYED -->
            <img src='https://spotify-recently-played-readme.vercel.app/api?user=31jqrdtnm4stjqr5hrtl4yendbta&count=8&unique=true' alt='Spotify recently played'/>
            <!-- DISCORD SERVER -->
            <iframe src='https://discord.com/widget?id=1301170143967051816&theme=dark' width='350' height='500' allowtransparency='true' frameborder='0' sandbox='allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts' title='MRM.dev discord server'></iframe>
        </div>
    </div>
</div>