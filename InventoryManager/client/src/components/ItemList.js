import { useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ItemList() {
    const [items, setItems] = useState([]); 
    useEffect(() => {
        axios
            .get('http://localhost:8000/api/items')
            .then((res) => {
                setItems(res.data);
            })
            .catch((err) => {
                console.log('ERROR IN GET ALL ITEMS', err);
            });
    }, []);
    
    const handleDelete = (deletedId) => {
        setItems(items.filter((item) => item._id !== deletedId));
    }

    return (
        <table class = "styled-table">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Description</th>
                    <th>Quantity On Hand</th>
                    <th>Item Brand</th>
                    <th>Receiver</th>
                    <th>Actions</th>
                    {/* <th>Last Adjusted</th> To display product updated_at */}
                </tr>
            </thead>
            <tbody>
                {items.map((item,index) => {
                    return (
                        <tr key = {item._id}>
                            <td>{item.itemName}</td>
                            <td>{item.itemDescription}</td>
                            <td>{item.itemQuantity}</td>
                            <td>{item.itemBrand}</td>
                            <td>{item.itemReceiver}</td>
                            <td>
                                <Link className = "link" to = {`/item/${item._id}`}>
                                    Product Details
                                </Link>
                                <span> | </span>
                                <Link className = "link" to = {`/item/edit/${item._id}`}>
                                    Edit Product
                                </Link>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    )
}

export default ItemList;