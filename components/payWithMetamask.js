// Docs: https://docs.metamask.io/guide/sending-transactions.html#example

import { Button } from "@nextui-org/react";
const Web3 = require("web3");

const PayWithMetamask = () => {

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
        <Button color="gradient" auto onClick={sendTransaction}>
            Pay Now
        </Button>
    );
};

export default PayWithMetamask;