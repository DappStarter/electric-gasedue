require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flee trophy charge ranch remain umbrella inflict clinic bubble slight'; 
let testAccounts = [
"0x1af4e14ff77b1b36dcdc88014861387628cea772c2a375b5fc83a02f8a047c15",
"0xc17c8512d871b52b3ca26305a4ae751389ff6c579eeef8a15e8ef51dac1e3ce5",
"0x51823eb983a34e338f656183562eef1c85529a45c836067f6b9b2f863f20f22c",
"0xf570d9dfe0865a9ed841b02bc4f6c11ff049e340e3bdfd46300e8d1a7c504848",
"0x260079791ba13dd2124509b18c606a4158fd19d2be0c1cbd6a0cba02029552a7",
"0xde037114ab3e6393e74bfb3fe95b0365744a18fce943667151bcbe78567f5ec5",
"0xf0be0c62fe48984d19863456071a70488a3b389a1004f0a50d4ee21536dfb72d",
"0x7f28e3199c80e6f998d864b775be8cf00252b7a78a48e3722a11f146e32b24d6",
"0xad96d35ef9e5d9c46853879a20c0fdd21f2a7a46e6c86403df3753b4f2419289",
"0x6683f32c9df4cd626eac141194dc2b18e12572e75fcb7bc7f38493dd77e67e10"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
