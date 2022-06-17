import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate} from "react-router-dom";
function Form(props) {
console.log('OLD ITEM', props.oldItem);

const [itemName, setItemName] = useState('');
const [itemDescription, setItemDescription] = useState('');
const [itemQuantity, setItemQuantity] = useState('');
const [itemBrand, setItemBrand] = useState([]);
const [itemReceiver, setItemReceiver] = useState([]);
const navigate = useNavigate();
const [errors, setErrors] = useState({});

const submitHandler = (e) => {
    e.preventDefault();
    axios
        .post('http://localhost:8000/api/item',{
        itemName,
        itemDescription,
        itemQuantity,
        itemBrand,
        itemReceiver
        })
        .then((res) => {
            console.log(`result of create Item : ${res}`);
            navigate('/');
        })
        .catch((err) => {
            console.log(err.response.data.error);
            setErrors(err.response.data.error.errors);
            // Uncaught TypeError: can't access property "name" of undefined
        });

};

return (
    <form className='create_item' onSubmit = {submitHandler}>
        <h3>Add inventory here: </h3>
        <label>Item Title : </label>
        <input type = "text" value = {itemName} name = "itemName" 
        onChange = {(e) => setItemName(e.target.value)}  />
        {errors.itemName && <p className = "text-danger"> {errors.itemName.message}</p>}
        <br />

        <label>Item Description : </label>
        <input type = "text" value = {itemDescription} name = "itemDescription" 
        onChange = {(e) => setItemDescription(e.target.value)}  />
        {errors.itemDescription && <p className = "text-danger"> {errors.itemDescription.message}</p>}
        <br />

        <label>Quantity on hand : </label>
        <input type = "number" value = {itemQuantity} name = "itemQuantity" 
        onChange = {(e) => setItemQuantity(e.target.value)}  />
        {errors.itemQuantity && <p className = "text-danger"> {errors.itemQuantity.message}</p>}
        <br />

        <label>Brand : </label> 
        <select onChange = {(e) => setItemBrand(e.target.value)}>
            <option>Select A Brand</option>
            <option value = "FTP"> FTP </option>
            <option value = "MST"> MST </option>
            <option value = "Dahler"> Dahler </option>
            <option value = "Kies"> Kies </option>
            <option value = "Other"> Other </option>
        </select>
        <br />
        {/* Brand and receiver needs to be a select with options simialr to enum in models */}
        {/* <input type = "text" value = {itemBrand} name = "itemBrand"
        onChange = {(e) => setItemBrand(e.target.value)}  />
        {errors.itemBrand && <p className = "text-danger"> {errors.itemBrand.message}</p>}
        <br /> */}

        <label>Received By : </label>
        <select onChange = {(e) => setItemReceiver(e.target.value)}>
            <option>Who Received Product?</option>
            <option value = "Ryan Meza">Ryan Meza</option>
            <option value = "Blaise Martinez">Blaise Martinez</option>
            <option value = "Gary Seagrave">Gary Seagrave</option>
            <option value = "Bryan Kiefer">Bryan Kiefer</option>
            <option value = "Josh Gonzalez">Josh Gonzalez</option>
            <option value = "Lisa Schaffer">Lisa Schaffer</option>
        </select>
        {/* <input type = "text" value = {itemReceiver} name = "itemReceiver" 
        onChange = {(e) => setItemReceiver(e.target.value)}  />
        {errors.itemReceiver && <p className = "text-danger"> {errors.itemReceiver.message}</p>}
        <br /> */}

        <input type = "submit" value = {props.buttonText} />
    </form>
)



}

export default Form;