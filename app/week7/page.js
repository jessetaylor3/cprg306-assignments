"use client";

import React, { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';

const Page = () => {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  const handleAddItem = (item) => {
    setItems(prevItems => [...prevItems, item]);
  };

  // New event handler to handle item selection
  const handleItemSelect = (itemName) => {
    const cleanedItemName = itemName.split(',')[0].trim().replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '');
    setSelectedItemName(cleanedItemName);
  };

  return (
    <main className="min-h-screen py-8 px-4">
      <h1 className="text-2xl font-semibold mb-6 text-center">Shopping List</h1>
      <div className="flex justify-between">
        {/* Grouping NewItem and ItemList components */}
        <div>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        {/* MealIdeas component which takes selectedItemName as a prop */}
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}

export default Page;
