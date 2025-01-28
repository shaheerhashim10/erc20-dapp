'use client';

import { useState } from 'react';
import { Address } from 'viem';
// import { useTransactions } from './use-transactions';

export const useTransactionForm = () => {
  const [recipient, setRecipient] = useState<Address>('' as Address);
  const [amount, setAmount] = useState('');
  //   const { sendTransaction, isSending } = useTransactions();

  const isValidAddress = (address: string) =>
    /^0x[a-fA-F0-9]{40}$/.test(address);
  const isValidAmount = (value: string) =>
    !isNaN(Number(value)) && Number(value) > 0;

  const handleRecipientChange = (value: string) => {
    if (value === '' || isValidAddress(value)) {
      setRecipient(value as Address);
    }
  };

  const handleAmountChange = (value: string) => {
    if (value === '' || isValidAmount(value)) {
      setAmount(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidAddress(recipient) || !isValidAmount(amount)) return;
    // await sendTransaction(recipient, amount);
    setRecipient('' as Address);
    setAmount('');
  };

  return {
    recipient,
    amount,
    handleRecipientChange,
    handleAmountChange,
    handleSubmit,
    isValidAddress: isValidAddress(recipient),
    isValidAmount: isValidAmount(amount),
    isFormValid: isValidAddress(recipient) && isValidAmount(amount),
    // isSending,
  };
};
