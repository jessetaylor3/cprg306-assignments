import React, { useState } from 'react';
import Item from './item';

const ItemList = ({ items, onItemSelect }) => {
    const [sortBy, setSortBy] = useState('name');

    //Function to handle sorting of items
    const handleSorting = (sortField) => {
        setSortBy(sortField);
    };

    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
            return a.category.localeCompare(b.category);
        } else {
            return 0;
        }
    });

    //Function to handle item selection
    const handleItemSelect = (item) => {
        onItemSelect(item); 
    };

    return (
        <div>
            <div className="mb-4">
                <button
                    className={`p-2 mr-2 ${sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
                    onClick={() => handleSorting('name')}
                >
                    Sort by Name
                </button>
                <button
                    className={`p-2 ${sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
                    onClick={() => handleSorting('category')}
                >
                    Sort by Category
                </button>
            </div>
            <ul>
                {sortedItems.map((item, index) => (
                    <Item
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                        index={index + 1}
                        onSelect={() => handleItemSelect(item)}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
