import { useState } from 'react'
const superagent = require('superagent')

function customHandleClick(text){
    console.log(text)
}

// const customHandleClick = () => {
//     superagent.get('https://jsonplaceholder.typicode.com/posts/1').end((err,res) => 
//     {
//         console.log(res.body)
//     }
    
//     )
// }

function HomePage() { 
    const [initialText, setText] = useState(" ")
    return (
    <div className="container mx-auto">
            <input className="border-solid border-gray-400 border-2" type="text" onChange={e => setText(e.target.value)}/>
            <button onClick={() => customHandleClick(initialText)}>
                Button
            </button>

        </div>

    );
}

export default HomePage