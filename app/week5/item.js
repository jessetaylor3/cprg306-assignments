import React from 'react';

function Item({ name, quantity, category, index }) {
    return (
        <li className="bg-gray-100 p-4 rounded-md mb-2">
            <h2 className="text-black text-xl font-bold">{index}. {name}</h2>
            <p className="text-gray-600">Quantity: {quantity}</p>
            <p className="text-gray-600">Category: {category}</p>
        </li>
    );
}

export default Item;
