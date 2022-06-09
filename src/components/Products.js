import Item from "./Item"
import recordData from "../recordData"

export default function Products(props) {
    const mappedData = recordData.map(record => <Item record={record} key={record.id} addToCart={props.addToCart}/>)

    return (
        <div className="records">
            {mappedData}
        </div>
    )
}