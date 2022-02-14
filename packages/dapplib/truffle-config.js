require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lock bone system educate rare remember huge guess private flat tunnel'; 
let testAccounts = [
"0x7f3d15f64a3cf614ab39dcd3b9939c5c00b7d1f012093614472e1896523bab9c",
"0x3e9a0724ad64f4eb9bfe7656b78114c4a41034b43917bf5e9fb1fc464acf47c4",
"0x33c1d56b633ef755a14c78625ece3bbc520cee15227fcc1b1c34a0e2ce46fe5b",
"0xd9921285b01a39edab28bbbdc04f8f1a94307352aec1bc40c8bdaacfd0242519",
"0x30219e9bcc9b94352a1c488187c5bd84ce403c5d6d7d49268827870ea249743b",
"0x9f3c333cf4e0d10dec7d9ae197022447dd7be31c8b26b1cdc92691f23c7562a0",
"0x5559354529f8c3b7d8ab8133aa7e23b99eb00d7ab628be25166a46f85dc0f03f",
"0x61f9e2550316b1f1d5b9e8fa3dcef21e7991764215dd4b16cc0b81b8cd17101c",
"0x0cb7a4312b87994587ebfedad94f5ab0a6e7358324f82322ed50fb4ca1848da9",
"0x2eb894fff51dce16404210c69430ceb78df1d83e576f336e6eca666fd7cd848b"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


