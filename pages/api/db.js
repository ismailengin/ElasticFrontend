import {query} from '../../lib/db';


export default async function handler(req, res) {
    var results =  await query(req.body).then(data => {console.log(data);return data})
    res.status(200).json(results);
}