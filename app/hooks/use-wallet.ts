'use client';

import { useAccount, useConnect, useDisconnect } from 'wagmi';

export const useWallet = () => {
  const { address, isConnected, connector } = useAccount();
  const { connect, connectors, isPending: isConnecting } = useConnect();
  const { disconnect } = useDisconnect();

  return {
    address,
    isConnected,
    connector,
    connect,
    disconnect,
    connectors,
    isConnecting,
  };
};
