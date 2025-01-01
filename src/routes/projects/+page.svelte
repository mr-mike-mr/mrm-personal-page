<script>
	// import assets
	import arrow_left_circle_icon from "$lib/assets/icons/arrow_left_circle.svg";
	import arrow_right_circle_icon from "$lib/assets/icons/arrow_right_circle.svg";
    import html5_icon from "$lib/assets/icons/html5.svg";
    import css3_icon from "$lib/assets/icons/css3.svg";

    // Past project function
    function past_project() {
        // TODO:
    }

    // Next project function
    function next_project() {
        // TODO:
    }
</script>

<div class="projects_root">
    <button on:click={past_project}><img alt="Arrow left circle icon" src={arrow_left_circle_icon} /></button>

    <div class="project_frame">
        <h1>Project name</h1>
        <p>Project description</p>
        <div class="project_tags">
            <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img alt="HTML5 icon" src={html5_icon} /> HTML</a>
            <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img alt="CSS3 icon" src={css3_icon} /> CSS</a>
        </div>
    </div>

    <button on:click={next_project}><img alt="Arrow right circle icon" src={arrow_right_circle_icon} /></button>
</div>