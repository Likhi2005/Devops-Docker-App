const fs = require('fs');

const {Pool} = require('pg');

if (!process.env.DATABASE_URL && !process.env.DATABASE_URL_FILE) {
    throw new Error('Database URL not provided');
}


databaseUrl = process.env.DATABASE_URL ||
    fs.readFileSync(process.env.DATABASE_URL_FILE, 'utf8');

const pool = new Pool({
    connectionString: databaseUrl,
    // ssl: {
    //     rejectUnauthorized: false,
    // },
});

// the pool will emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens

pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err);
    // process.exit(-1);
});

// async/await - check out a client
const getDateTime = async () => {
    if (!pool) {
        throw new Error('Database not configured');
    }
    const client = await pool.connect();
    try {
        const res = await client.query('SELECT NOW() as now;');
        return res.rows[0];
    } catch (err) {
        console.log('Database error occured');
        console.log(err.stack);
    } finally {
        client.release();
    }
}

module.exports = {getDateTime};