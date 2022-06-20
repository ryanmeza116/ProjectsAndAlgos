import React from 'react';
import axios from 'axios';
function DeleteButton(props) {
const { id, handleDelete } = props;
const deleteHandler = () => {
axios
    .delete(`http://localhost:8000/api/item/${id}`)
    .then((res) => {
    console.log(res);
    handleDelete(id); // dynamic (navigate | filter)
    })
    .catch((err) => {
    console.log(err);
    });
};
return <button className = "Deletebutton" onClick={deleteHandler}> Delete from Inventory </button>;
}

export default DeleteButton;