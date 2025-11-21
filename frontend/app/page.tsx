'use client';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Suggestions from './components/Suggestions';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="flex max-w-full">
        <Sidebar />
        <div className="flex-1 flex gap-8 justify-center px-4 lg:px-0">
          <Feed />
          <Suggestions />
        </div>
      </div>
    </div>
  );
}
