import _ from 'lodash'
import { put } from 'superagent';
import Row from './Row';

function DBResultList(props) {
    // console.log(_.map(props.itemFromParent, "UserId"))

    var Columns = props.itemFromParent.length == 0 ? null : Object.keys(props.itemFromParent[0])
    
    function getRowValues(item){
        var returnRowValues=[]
        for(var i=0; i < Columns.length; i++){
            returnRowValues[i]=item[Columns[i]]
        } 
        return returnRowValues
    }

    return (
        <div className="container">
            <table className="table-auto">
                {
                 <thead>
                     <tr>
                    {props.itemFromParent.length == 0 ? null : (
                            <Row key={Columns} rowValues = {Columns}/>
                    )
                    }
                    </tr>
                </thead>
                }
                {_.map(props.itemFromParent, ((item) => (
                    <tbody>
                        <tr>
                            {<Row rowValues={getRowValues(item)}/>}
                        </tr>
                    </tbody>
                ))
                )}
            </table>
        </div>
    
    )
}

export default DBResultList