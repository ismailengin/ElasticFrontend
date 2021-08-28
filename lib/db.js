const options = {
    client: 'mssql',
    connection: {
        host: '192.168.99.102',
        user: 'SA',
        password: '@sdqwe123',
        database: 'TestDB'
    }
}

const http = require('http');
const knex = require('knex')(options);
const hostname = '127.0.0.1';
const port = 3000;



export async function query (text) {
    // knex('dbo.Inventory').where('quantity','>', '150').select('name').then(
    // (version) => console.log(version)).catch((err) => { console.log( err); throw err })
    // .finally(() => {
    //     knex.destroy();
    // });
    var results =  await knex('dbo.Inventory').select('name').then(data => {return data})
    return results
}