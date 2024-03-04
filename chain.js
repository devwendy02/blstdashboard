
export const blast = {
  id: 81457,
  name: 'Blast Mainnet',
  network: 'Blast Mainnet',
  nativeCurrency: {
    decimals: 18,
    name: 'ETH',
    symbol: 'ETH',
  },
  rpcUrls: {
    public: { http: ['https://rpc.blast.io'] },
    default: { http: ['https://rpc.blast.io'] },
  },
  blockExplorers: {
    etherscan: { name: 'basescan', url: 'https://blastscan.io/' },
    default: { name: 'basescan', url: 'https://blastscan.io/' },
  },
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 11_907_934,
    },
  },
} 
