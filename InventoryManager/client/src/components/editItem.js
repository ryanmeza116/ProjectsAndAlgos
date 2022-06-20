import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

console.log('Accessing edit item component')

const EditItem = (props) => {
    const { id } = useParams();
    const [itemName, setItemName] = useState("");
    const [itemDescription, setItemDescription] = useState('');
    const [itemQuantity, setItemQuantity] = useState('');
    const [itemBrand, setItemBrand] = useState([]);
    const [itemReceiver, setItemReceiver] = useState([]);
    const [errors, setErrors] = useState({}); // we use an object because errors is an object with certain keys in browser terminal
    const [itemNotFoundError, setItemNotFoundError] = useState("");
    console.log(id);
    const navigate = useNavigate();
    
    
    useEffect(() => {
    axios
        .get(`http://localhost:8000/api/item/${id}`)
        .then((response) => {
        console.log(response.data);
        setItemName(response.data.itemName);
        setItemDescription(response.data.itemDescription);
        setItemQuantity(response.data.itemQuantity);
        setItemBrand(response.data.itemBrand);
        setItemReceiver(response.data.itemReceiver);
        })
        .catch((err) => {
        console.log("ERROR IN GET" ,err.response);
        setItemNotFoundError(`Item not found using that ID`);
        });
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
    axios
    .put(`http://localhost:8000/api/item/${id}`, {
        itemName,
        itemDescription,
        itemQuantity,
        itemBrand,
        itemReceiver,
    })
    .then((response) => {
    console.log(response);
    navigate('/');
    })
    .catch((err) => {
    console.log(err.response.data.error.errors);
    setErrors(err.response.data.error.errors);
    });
};
return (
    <form onSubmit={submitHandler} className = "create_item">
    {itemNotFoundError ? (
    <h2>
        {itemNotFoundError} <Link to="/new">Click here to add a new Item</Link>
    </h2>
    ) : null}
    <Link to="/">Home</Link>


    <div className="form-group">
    <label>Product : </label>
    <input
        type="text"
        id="itemName"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
    />
    <label> Item Description :  </label>
    <input
        type="text"
        id="itemDescription"
        value={itemDescription}
        onChange={(e) => setItemDescription(e.target.value)}
    />
    <label> Quantity on hand :  </label>
    <input
        type="number"
        id="itemQuantity"
        value={itemQuantity}
        onChange={(e) => setItemQuantity(e.target.value)}
        
    />
    <br />
    <label>Item Brand: </label>
    <input
        type="select"
        id="itemBrand"
        value={itemBrand}
        onChange={(e) => setItemBrand(e.target.value)}
    />
    <br />
    <label>Received By : </label>
    <input
        type="select"
        id="itemReceiver"
        value={itemReceiver}
        onChange={(e) => setItemReceiver(e.target.value)}
    />
    {errors.itemName ? <p>{errors.itemName.message}</p> : null}
    {errors.itemDescription ? <p>{errors.itemDescription.message}</p> : null}
    {errors.itemQuantity ? <p>{errors.itemQuantity.message}</p> : null}
    {errors.itemBrand ? <p>{errors.itemBrand.message}</p> : null}
    {errors.itemReceiver ? <p>{errors.itemReceiver.message}</p> : null}
    </div>
    <button type="submit" className="button">
    Update Item
    </button>
</form>
);
};

export default EditItem;