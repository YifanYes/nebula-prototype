// Docs: https://docs.metamask.io/guide/sending-transactions.html#example

import { FaShoppingCart } from "react-icons/fa";
const Web3 = require("web3");

const PayWithMetamask = ({styles}) => {

    // Creates the a metamask transaction
    const sendTransaction = async () => {
        // Transaction data 
        const transactionParameters = {
            to: '0xB90168C8CBcd351D069ffFdA7B71cd846924d551', // Product owner address
            from: ethereum.selectedAddress, // Must match current user's active address
            value: '100000000000000' // Product price to send in wei
        }

        console.log(`Attempting to create transaction`);
        console.log(`Sender address: ${transactionParameters.from}`);


        // txHash is a hexadecimal string
        // As with any RPC call, it may throw an error
        const txHash = await ethereum.request({
            method: 'eth_sendTransaction',
            params: [transactionParameters]
        })

        // Create a view to redirect the user when the txHash exists
        console.log(txHash);
    }

    return (
        <a type="button" className={styles} onClick={sendTransaction}>
            <FaShoppingCart/>
        </a>
    );
};

export default PayWithMetamask;