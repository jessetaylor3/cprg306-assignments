"use client";

import React, { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json';

const Page = () => {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (item) => {
    setItems(prevItems => [...prevItems, item]);
  };

  return (
    <main className="min-h-screen py-8 px-4">
      <h1 className="text-2xl font-semibold mb-6 text-center">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}

export default Page;
