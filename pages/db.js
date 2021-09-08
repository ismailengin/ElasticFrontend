import { useState } from 'react'
import DBResultList from './DBResultList'
import Layout from './layout'
import ClipLoader from "react-spinners/ClipLoader";
const superagent = require('superagent')
import DBInput from './dbinput';


function DBPage ({columns}) {
    const [initialText, setText] = useState(" ");
    const [name, setName] = useState([]);
    const [isLoading, setLoading] = useState(false); 
    const [inputList, setInputList] = useState([]);
    const customHandleClick = async initialText => {
        setName("")
        setLoading(true)
        try {
            const res = await superagent.post('/api/db').send({query: initialText});
            var json_res = (JSON.parse(res.text))
            console.log(json_res)
            setName(json_res)
            setLoading(false);     
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    const onClickAddElement = event => {
        setInputList(inputList.concat(<DBInput key={inputList.length}/>))
    }

    return (
        <Layout> 
        <div className="container ">
            <div className="text-center">
            {inputList}
            <button className="bg-indigo-700 btn-primary text-white font-bold px-2 py-2 mx-2 rounded shadow-lg" onClick={onClickAddElement}>
                    +
            </button>
                {/* <input className="border-solid border-gray-400 border-2 mt-4 px-2 py-2" type="text" placeholder="placeHolderText" onChange={e => setText(e.target.value)} /> */}
                <button className="bg-indigo-700 btn-primary text-white font-bold px-2 py-2 mx-2 rounded shadow-lg" onClick={() => customHandleClick(initialText)}>
                    Search
            </button>
            </div>
            {/* {isLoading ? <Loader/> : null} */}
            <div className="flex justify-center pt-6"><ClipLoader loading={isLoading}/></div>
            <DBResultList key={name} itemFromParent={name} loadingChild={isLoading}/>
        </div>
        </Layout>
    );
}

DBPage.getInitialProps = async (ctx) => {
    const res = await superagent.post('http://localhost:3000/api/db').send({query: "SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME=N'Employee'"})
    const json = await res.body
    return { columns: json }
}

export default DBPage;