import _ from 'lodash'

export default function Row(props) {
    return(
            _.map(props.rowValues,((value) => (
                
                <th className="px-4 py-2">{value}</th>
                
            )) 
            ))

}