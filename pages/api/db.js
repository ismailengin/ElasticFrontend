import {query} from '../../lib/db';


export default async function handler(req, res) {
    await query(req.body.query).then(data => {
        try {
            console.log(data);
            res.status (200).json(data);
        }
        catch(error){
            res.status(500).json(data)
        }
    })
    // console.log(req.body.query)
}

