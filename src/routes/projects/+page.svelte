<!-- SCRIPT -->
<script>
    // import assets
	import simple_chat_project from "$lib/assets/projects/simple_chat_project.png";
    import reminder_of_important_dates from "$lib/assets/projects/reminder_of_important_dates.png";
	// import libs
	import locales from "$lib/locales.json";
	// import stores
	import { lang } from "$lib/stores/user_store.js";
</script>

<!-- PROJECTS ROOT -->
<div class="projects_root">
    <!-- PROJECT - Simple Chat App -->
    <div class="project">
        <!-- IMAGE AND HEADING -->
        <div>
            <!-- IMAGE -->
            <img alt="Project screenshot" src={simple_chat_project} />
            <!-- HEADING -->
            <h1>Simple Chat App</h1>
        </div>
        <!-- LINK -->
        <a target="_blank" href="https://github.com/mr-mike-mr/simple-chat-app">{locales[$lang]["13"]}</a>
    </div>
    <!-- PROJECT - Reminder of Important dates -->
    <div class="project">
        <div>
            <img alt="Project screenshot" src={reminder_of_important_dates} />
            <h1>Reminder of Important dates</h1>
        </div>
        <a target="_blank" href="https://github.com/mr-mike-mr/mrm-reminder-of-important-dates?tab=readme-ov-file">{locales[$lang]["13"]}</a>
    </div>
</div>