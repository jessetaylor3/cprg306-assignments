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

  const handleItemSelect = (itemName) => {
    setSelectedItemName(itemName);
  };

  return (
    <main className="min-h-screen py-8 px-4">
      <h1 className="text-2xl font-semibold mb-6 text-center">Shopping List</h1>
      <div className="flex justify-between">
        <div className="flex-1 mr-4">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="flex-1">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}

export default Page;
