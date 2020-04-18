import { useState } from 'react'
import ResultList from './resultlist'
const superagent = require('superagent')


function HomePage() {
    const [initialText, setText] = useState(" ")
    const [name, setName] = useState([])

    const customHandleClick = (initialText) => {
        superagent.get('https://jsonplaceholder.typicode.com/posts').query({ userId: initialText }).end((err, res) => {
            // console.log(res.body)
            setName(res.body)
        })
    }

    return (
        <div className="container mx-auto">
            <div className="text-center">
                <input className="border-solid border-gray-400 border-2" type="text" placeholder="placeHolderText" onChange={e => setText(e.target.value)} />
                <button className="px-5" onClick={() => customHandleClick(initialText)}>
                    Button
            </button>
            </div>
            <ResultList itemFromParent={name} />
        </div>

    );
}

export default HomePage