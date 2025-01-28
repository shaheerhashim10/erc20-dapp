import { ConnectWalletButton } from './connect-wallet-button';

export const Header = () => {
  return (
    <header className="flex justify-between w-full align-middle">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Send ERC20 Tokens
      </h1>
      <div>
        <ConnectWalletButton />
      </div>
    </header>
  );
};
