'use client';

import { useTransactionForm } from '../hooks/use-transaction-form';
import { Button } from './button';

export const TransactionForm = () => {
  const {
    recipient,
    amount,
    handleRecipientChange,
    handleAmountChange,
    handleSubmit,
    isFormValid,
    // isSending,
    isValidAddress,
    isValidAmount,
  } = useTransactionForm();

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Recipient Address
          {!isValidAddress && recipient && (
            <span className="text-red-500 text-xs ml-2">Invalid address</span>
          )}
        </label>
        <input
          type="text"
          value={recipient}
          onChange={(e) => handleRecipientChange(e.target.value)}
          placeholder="0x..."
          className={`w-full p-3 border rounded-lg focus:ring-2 ${
            recipient && !isValidAddress
              ? 'border-red-500 focus:ring-red-500'
              : 'focus:ring-blue-500 focus:border-blue-500'
          }`}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Amount
          {!isValidAmount && amount && (
            <span className="text-red-500 text-xs ml-2">Invalid amount</span>
          )}
        </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => handleAmountChange(e.target.value)}
          placeholder="0.0"
          step="0.001"
          className={`w-full p-3 border rounded-lg focus:ring-2 ${
            amount && !isValidAmount
              ? 'border-red-500 focus:ring-red-500'
              : 'focus:ring-blue-500 focus:border-blue-500'
          }`}
        />
      </div>
      <Button
        type="submit"
        // disabled={!isFormValid || isSending}
        disabled={!isFormValid}
        className="w-full"
      >
        {/* {isSending ? 'Sending...' : 'Send Tokens'} */}
        {'Send Tokens'}
      </Button>
    </form>
  );
};
