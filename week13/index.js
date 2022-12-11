const sql = require('mssql');

const config = {
    user: 'sa',
    password: 'super_password',
    server: 'localhost',
    database: 'testdb',
    options: {
        enableArithAbort: true
    }
}

const run = async() => {
    let pool;
    try{
        console.log('Connection Opneing...');
        pool = await sql.connect(config);
        const { recordset} = await sql.query`Select * from attracties;`;

        console.log(recordset);


    } catch(err){
        console.log(err)
    } finally{
        pool.close();
        console.log('connection closed');
    }
}
run();