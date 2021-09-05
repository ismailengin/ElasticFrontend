const options = {
    client: 'mssql',
    connection: {
        host: '192.168.99.102',
        user: 'SA',
        password: 'ThisIsAReallyCoolPassword123',
        database: 'AdventureWorks2019'
    }
}

const knex = require('knex')(options);


export async function query (text) {
    console.log(text)
    // var results =  await knex('dbo.Inventory').select('name').then(data => {return data})
    // var results =  await knex('dbo.Inventory'    ).select(knex.raw(text)).then(data => {return data})
    var results =  await knex.raw(text).then(data => {return data})

    return results
}