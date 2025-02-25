<!-- SCRIPT -->
<script>
    // import page
	import { page } from '$app/state';
</script>

<!-- PAGE NOT FOUND ERROR -->
<div class="page_not_found_error">
    <!-- HEADING -->
    <h1>{page.error.message}</h1>
    <!-- ITALIC -->
    <i>{page.error.slug}</i>
</div>