import { goto } from '$app/navigation';

// set url params
export async function set_url_params(param = '', value = '') {
    // create url object
    const url = new URL(window.location.href);
    // add/update param
    url.searchParams.set(param, value);
    // go to on url from param
    goto(url.toString());
}