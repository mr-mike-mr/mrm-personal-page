// import svelte libs
import { goto } from '$app/navigation';

// set url params
export async function set_url_params(param = '', value = '', replace_last_history = false) {
    // create url object
    const url = new URL(window.location.href);
    // add/update param
    url.searchParams.set(param, value);
    // go to on url from param
    goto(url.toString(), { replaceState: replace_last_history });
}