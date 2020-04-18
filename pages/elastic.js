import { useState } from 'react'
import ResultList from './resultlist'
import Loader from './loader'
import Navbar from './navbar'
const superagent = require('superagent')

function Elastic () {
    const [initialText, setText] = useState(" ")
    const [name, setName] = useState([])
    const [isLoading, setLoading] = useState(false);
    const customHandleClick = async initialText => {
        setLoading(true)
        try {
            const res = await superagent.get('https://jsonplaceholder.typicode.com/posts').query({ userId: initialText });
            setName(res.body)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="container mx-auto">
            <Navbar/>
            <div className="text-center">
                <input className="border-solid border-gray-400 border-2 mt-4 px-2 py-2" type="text" placeholder="placeHolderText" onChange={e => setText(e.target.value)} />
                <button className="bg-indigo-700 btn-primary text-white font-bold px-2 py-2 mx-2 rounded shadow-lg" onClick={() => customHandleClick(initialText)}>
                    Search
            </button>
            </div>
            {isLoading ? <Loader/> : null}
            <ResultList itemFromParent={name} loadingChild={isLoading}/>
        </div>

    );
}

export default Elastic;