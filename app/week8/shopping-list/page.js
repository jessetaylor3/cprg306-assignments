// week-8/shopping-list/page.js
"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUserAuth } from "../_utils/auth-context";
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';

const ShoppingListPage = () => {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');
  const { user, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/week-8'); // Use the router instance for navigation
    }
  }, [user, router]);

  const handleAddItem = (item) => {
    setItems(prevItems => [...prevItems, item]);
  };

  const handleItemSelect = (itemName) => {
    setSelectedItemName(itemName);
  };

  return user ? (
    <main className="min-h-screen py-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Shopping List</h1>
        <button onClick={firebaseSignOut} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700">Logout</button>
      </div>

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
  ) : (
    <div className="flex flex-col items-center justify-center h-screen">
      <p>Loading...</p>
    </div>
  );
};

export default ShoppingListPage;

