import { useState } from 'react'
import ResultList from './resultlist'
import Loader from './loader'
const superagent = require('superagent')


function HomePage() {
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
    // async function customHandleClick (initialText) {
    //     setLoading(true)
    //     .then((err, res) => {
    //         // console .log(res.body)
    //         setName(res.body)
    //         setLoading(false)
    //     })
    // }

    return (
        <div className="container mx-auto">
            <div className="text-center">
                <input className="border-solid border-gray-400 border-2" type="text" placeholder="placeHolderText" onChange={e => setText(e.target.value)} />
                <button className="px-5" onClick={() => customHandleClick(initialText)}>
                    Button
            </button>
            </div>
            {isLoading ? <Loader/> : null}
            <ResultList itemFromParent={name} loadingChild={isLoading}/>
        </div>

    );
}

export default HomePage