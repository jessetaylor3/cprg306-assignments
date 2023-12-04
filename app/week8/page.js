"use client";

import React from 'react';
import { useUserAuth } from "./_utils/auth-context";
import Link from 'next/link';
import Layout from './layout';

const LandingPage = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {!user ? (
        <button onClick={gitHubSignIn} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Login with GitHub</button>
      ) : (
        <div>
          <p className="mb-4">Welcome, {user.displayName} ({user.email})</p>
          <button onClick={firebaseSignOut} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 mr-4">Logout</button>
          <Link href="/week8/shopping-list" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">
            Go to Shopping List
          </Link>
        </div>
      )}
    </div>
  );
};

const Page = () => {
  return (
    <Layout>
      <LandingPage />
    </Layout>
  );
};

export default Page;
