import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import DeleteButton from './DeleteItem';

function Item() {
    const [item, setItem] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();
    console.log('ID', id);
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/item/${id}`)
            .then((res) => {
                console.log('Item', res.data);
                setItem(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <h2>{item.itemBrand} {item.itemName}</h2>
            <p>Item Description : {item.itemDescription}</p>
            <p>Item Quantity : {item.itemQuantity}</p>
            <p>Item Brand : {item.itemBrand}</p>
            <p>Item Receiver : {item.itemReceiver}</p>
            <DeleteButton id = {item._id} handleDelete = {() => navigate('/')} />
        </div>
    );
}
export default Item;