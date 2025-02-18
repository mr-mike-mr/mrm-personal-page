// import libs
import mysql from 'mysql2/promise';
// import mysql login details
import { DB_HOST, DB_USER, DB_PASSWORD } from "$env/static/private";

// export async load function
export async function load() {
    // try code
    try {
        // create the connection to database
        const connection = await mysql.createConnection({
            host: DB_HOST,
            user: DB_USER,
            password: DB_PASSWORD,
            database: "mrm_personal_page",
        });

        // last selected id
        let last_selected_id = 0;

        // execut sql query to get data
        const [results, fields] = await connection.query(`SELECT id, thumbnail, title_en, title_sk, link, description_en, description_sk FROM blog WHERE id > ${last_selected_id} ORDER BY id LIMIT 5`); // TODO: add search bar filter

        // close connection
        await connection.end();

        // return all data +page.svelte
        return { blog_posts: results.reverse() };
    // catch error
    } catch (error) {
        // print error into console
        console.error("DB error:", error);
        // return null array
        return { blog_posts: [] };
    }
}