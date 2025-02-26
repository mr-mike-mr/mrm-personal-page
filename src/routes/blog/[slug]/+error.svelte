<!-- SCRIPT -->
<script>
    // import page
	import { page } from '$app/state';
</script>

<!-- PAGE NOT FOUND ERROR -->
<div class='page_not_found_error'>
    <h1>{page?.error?.message}</h1>
    <i>{page?.error?.slug}</i>
</div>