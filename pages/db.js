import { useState } from 'react'
import ResultList from './resultlist'
import Layout from './layout'
import ClipLoader from "react-spinners/ClipLoader";
const superagent = require('superagent')



function Elastic () {
    const [initialText, setText] = useState(" ");
    const [name, setName] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const customHandleClick = async initialText => {
        setName("")
        setLoading(true)
        try {
            const res = await superagent.post('/api/db').send({name: initialText});
            var json_res = (JSON.parse(res.text))
            setName(json_res)
            setLoading(false); 
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Layout> 
        <div className="container mx-auto">
            <div className="text-center">
                <input className="border-solid border-gray-400 border-2 mt-4 px-2 py-2" type="text" placeholder="placeHolderText" onChange={e => setText(e.target.value)} />
                <button className="bg-indigo-700 btn-primary text-white font-bold px-2 py-2 mx-2 rounded shadow-lg" onClick={() => customHandleClick(initialText)}>
                    Search
            </button>
            </div>
            {/* {isLoading ? <Loader/> : null} */}
            <div className="flex justify-center pt-6"><ClipLoader loading={isLoading}/></div>
            <ResultList itemFromParent={name} loadingChild={isLoading}/>
        </div>
        </Layout>
    );
}

export default Elastic;