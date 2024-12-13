
const Ethereum = {
    hex: '0x1',
    name: 'Ethereum',
    rpcUrl: 'https://eth-mainnet.g.alchemy.com/v2/Wm_0y9MKmtCbTyGlm09pbSNMMDBt4Cs7',
    // rpcUrl: 'https://eth.llamarpc.com',
    ticker: "ETH"
  };
  
  const Polygon = {
    hex: '0x89',
    name: 'Polygon',
    rpcUrl: 'https://polygon-rpc.com',
    ticker: "MATIC"
  };
  
  const Avalanche = {
    hex: '0xa86a',
    name: 'Avalanche',
    rpcUrl: 'https://api.avax.network/ext/bc/C/rpc',
    ticker: "AVAX"
  };
  
  // BSC Testnet configuration
  const BscTestnet = {
    hex: '0x61', // BSC Testnet chain ID
    rpcUrl: 'https://site2.moralis-nodes.com/bsc-testnet/24bd41b348834a57b721b0db0c96d3c9', // Public RPC URL from Binance
    ticker: "tBNB" // Common ticker symbol for BSC Testnet BNB
  };
  
  // Ethereum Sepolia configuration
  const Sepolia = {
    hex: '0xaa36a7', // Sepolia testnet chain ID
    name: 'Ethereum Sepolia Testnet',
    rpcUrl: 'https://site1.moralis-nodes.com/sepolia/83385b46a64841c0b33d74d26b0af99b', // Replace with your Alchemy API key
    ticker: "sETH" // Common ticker symbol for Sepolia test ETH
  };
  
  export const CHAINS_CONFIG = {
    "0x1": Ethereum,
    "0x89": Polygon,
    "0xa86a": Avalanche,
    "0x61": BscTestnet,
    "0xaa36a7": Sepolia // Add Ethereum Sepolia
  };
  


