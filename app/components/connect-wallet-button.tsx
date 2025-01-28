'use client';

import { parseHashToRender } from '@/lib/utils';
import { useWallet } from '../hooks/use-wallet';
import { Button } from './button';

export const ConnectWalletButton = () => {
  const {
    address,
    isConnected,
    connect,
    disconnect,
    connectors,
    isConnecting,
  } = useWallet();

  if (isConnected)
    return (
      <Button variant="destructive" onClick={() => disconnect()}>
        Disconnect {address ? parseHashToRender(address) : '...'}
      </Button>
    );

  return (
    <>
      <Button
        onClick={() => connect({ connector: connectors[0] })}
        disabled={isConnecting}
        className="disabled:opacity-50"
      >
        {isConnecting ? 'Connecting...' : 'Connect Wallet'}
      </Button>
      {/* <p>Connect your wallet to start sending tokens</p> */}
    </>
  );
};
