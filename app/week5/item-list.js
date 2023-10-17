"use client";

import React, { useState } from 'react';
import items from './items.json';
import Item from './item';

const ItemList = () => {
    const [sortBy, setSortBy] = useState('name');

    // Function to handle sorting of items
    const sortedItems = items.sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
            return a.category.localeCompare(b.category);
        } else {
            return 0;
        }
    });

    return (
        <div>
            <div className="mb-4">
                <button
                    className={`p-2 mr-2 ${sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
                    onClick={() => setSortBy('name')}
                >
                    Sort by Name
                </button>
                <button
                    className={`p-2 ${sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
                    onClick={() => setSortBy('category')}
                >
                    Sort by Category
                </button>
            </div>
            <ul>
                {sortedItems.map((item) => (
                    <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
