import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Form from './ItemForm';
function NewItem() {
const navigate = useNavigate();
const submitHandler = (item, setErrors) => {
axios
    .post('http://localhost:8000/api/item', item)
    .then((res) => {
    navigate('/');
    })
    .catch((err) => {
    console.log('ERROR Response Data', err.response.data);
    setErrors(err.response.data.error.errors);
    });
};
return <Form submitHandler={submitHandler} buttonText={'Add Item'} />;
}

export default NewItem;