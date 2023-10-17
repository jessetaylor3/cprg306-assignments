import React from 'react';
import ItemList from './item-list'; 

const Page = () => {
  return (
    <main className="min-h-screen py-8 px-4">
      <h1 className="text-2xl font-semibold mb-6 text-center">Shopping List</h1>
      <ItemList />
    </main>
  );
}

export default Page;
