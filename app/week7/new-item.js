"use client";

import React, { useState } from 'react';

function NewItem({ onAddItem }) {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState('Produce');

    const handleSubmit = (event) => {
        event.preventDefault();
        onAddItem({ name, quantity, category });

        setName('');
        setQuantity(1);
        setCategory('Produce');
    }

    return (
        <main className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-2xl text-gray-800 font-bold mb-8">
                    Add New Item
                </h1>
                <form onSubmit={handleSubmit}>
                    <label className="block mb-4">
                        <span className="text-gray-800">Name:</span>
                        <input 
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
                        />
                    </label>
                    
                    <label className="block mb-4">
                        <span className="text-gray-800">Quantity:</span>
                        <input 
                            type="number"
                            min="1"
                            max="99"
                            value={quantity}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                            required
                            className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
                        />
                    </label>

                    <label className="block mb-4">
                        <span className="text-gray-800">Category:</span>
                        <select 
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
                        >
                            {["Produce", "Dairy", "Bakery", "Meat", "Frozen Foods", "Canned Goods", "Dry Goods", "Beverages", "Snacks", "Household", "Other"].map((cat) => (
                                <option value={cat} key={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>
                    </label>
                    
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-500 rounded-md text-white"
                    >
                        Add to List
                    </button>
                </form>
            </div>
        </main>
    );
}

export default NewItem;
