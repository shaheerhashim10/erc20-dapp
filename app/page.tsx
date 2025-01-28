'use client';

import { Header, TransactionForm } from './components';

export default function Home() {
  return (
    <main className="container mx-auto p-4 max-w-2xl">
      <Header />
      <TransactionForm />
    </main>
  );
}
