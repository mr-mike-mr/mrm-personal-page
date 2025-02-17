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

        // execut sql query to get data
        const [results, fields] = await connection.query("SELECT * FROM projects ORDER BY id DESC");

        await connection.end();

        // return all data +page.svelte
        return { projects: results };
    // catch error
    } catch (error) {
        // print error into console
        console.error("DB error:", error);
        // return null array
        return { projects: [] };
    }
}