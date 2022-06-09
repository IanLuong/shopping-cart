import ProductsItem from "./ProductsItem"
import recordData from "../recordData"

export default function Products(props) {
    const mappedData = recordData.map(record => <ProductsItem record={record} key={record.id} addToCart={props.addToCart}/>)

    return (
        <div className="records">
            {mappedData}
        </div>
    )
}