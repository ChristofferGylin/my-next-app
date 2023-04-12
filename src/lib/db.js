import mysql from 'serverless-mysql';

const db = mysql({
    config: {
        host: process.env.DB_HOST,
        database: process.env.NAME,
        user: process.env.USERNAME,
        password: process.env.PASSWORD
    }
})

const executeQuery = async ({ query, values }) => {

    try {

        const results = await db.query(query, values);
        await db.end();
        return results;

    } catch {

        return { error };

    }

}

export default executeQuery;