// app/hooks/useTransactions.ts
'use client';

import { useState, useEffect } from 'react';
// import { useAccount, usePublicClient, useWalletClient } from 'wagmi';
// import { parseUnits } from 'viem';
// import { TransactionStatus, Transaction } from '../types';

const STORAGE_KEY = 'erc20-transactions';

interface Transaction {
  hash: `0x${string}`;
  from: string;
  to: string;
  amount: string;
  //   status: TransactionStatus;
  timestamp: number;
  error?: string;
}

export const useTransactions = () => {
  //   const { data: walletClient } = useWalletClient();
  //   const publicClient = usePublicClient();
  //   const { address } = useAccount();
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  // Load transactions from localStorage
  useEffect(() => {
    const savedTransactions = localStorage.getItem(STORAGE_KEY);
    if (savedTransactions) {
      setTransactions(JSON.parse(savedTransactions));
    }
  }, []);

  // Sync transactions across tabs
  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) {
        setTransactions(JSON.parse(e.newValue || '[]'));
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  //   const updateTransactions = (txns: Transaction[]) => {
  //     setTransactions(txns);
  //     localStorage.setItem(STORAGE_KEY, JSON.stringify(txns));
  //   };

  /* const sendTransaction = async (to: string, amount: string) => {
    if (!address || !walletClient) return;

    const newTransaction: Transaction = {
      hash: '' as `0x${string}`,
      from: address,
      to,
      amount,
      status: 'preparing',
      timestamp: Date.now(),
    };

    updateTransactions([...transactions, newTransaction]);

    try {
      const hash = await walletClient.sendTransaction({
        to,
        value: parseUnits(amount, 18), // Assuming 18 decimals
      });

      const updated = transactions.map((tx) =>
        tx.hash === '' ? { ...tx, hash, status: 'pending' } : tx
      );
      updateTransactions(updated);

      const receipt = await publicClient.waitForTransactionReceipt({ hash });

      updateTransactions(
        updated.map((tx) =>
          tx.hash === hash ? { ...tx, status: receipt.status } : tx
        )
      );
    } catch (error) {
      updateTransactions(
        transactions.map((tx) =>
          tx.hash === ''
            ? { ...tx, status: 'error', error: (error as Error).message }
            : tx
        )
      );
    }
  };

  const speedUpTransaction = async (hash: `0x${string}`) => {
    if (!walletClient) return;

    try {
      const newHash = await walletClient.request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: address,
            to: transactions.find((tx) => tx.hash === hash)?.to,
            value: parseUnits(
              transactions.find((tx) => tx.hash === hash)?.amount || '0',
              18
            ),
            nonce: await walletClient.getTransactionCount({ address }),
            gasPrice: parseUnits('100', 'gwei'), // Increased gas price
          },
        ],
      });

      updateTransactions(
        transactions.map((tx) =>
          tx.hash === hash ? { ...tx, hash: newHash, status: 'pending' } : tx
        )
      );
    } catch (error) {
      console.error('Failed to speed up transaction:', error);
    }
  }; */

  return { transactions /* sendTransaction, speedUpTransaction */ };
};
