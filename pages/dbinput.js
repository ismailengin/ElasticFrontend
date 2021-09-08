import Select  from "react-select";

function DBInput(props) {
    // console.log(props.columnList)
    var columnArr = []
    _.map(props.columnList, ((item) => {
        columnArr.push({value: item.COLUMN_NAME, label: item.COLUMN_NAME})
    }))

    console.log(columnArr)
    return(
        // {_.map(props.columnList, ((item) => (
        //      {item.COLUMN_NAME} </Dropdown.Item> 
        //  )))} 
        <Select defaultValue={columnArr[0]} options={columnArr}></Select>
    )
}

export default DBInput;