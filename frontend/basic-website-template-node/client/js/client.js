console.log("Hello! Welcome to the magic");
console.log(
  "Unforunately, all this magic is backend, you'd never actually get to see any of htis happening so we'll be using the console for most of this so it's at least a bit exciting"
);

function myFunction() {
  console.log(
    "Normally companies would send this plain text through the network with all your sensative details, obviously you can't put this on the blockchain"
  );
  console.log(document.getElementById("card_num").value);
  console.log(document.getElementById("cvv").value);
  console.log(document.getElementById("amount").value);

  console.log(
    "Instead we issue a custom verified credential to the Merchant's wallet (https://github.com/adit313/ETHGlobalNYC2023/blob/master/creditTransactionAuth/creditTransactionAuthNum.json)"
  );

  console.log("Card Payment Authenticated, get your Verified Credential here");

  console.log(
    `curl --location 'http://0046-2600-4041-5c26-f00-59e2-bb23-6972-25f8.ngrok-free.app/v1/did:polygonid:polygon:mumbai:2qGSAgFbXWN8ByNZQdCwabCsKJD17N3DyKQtRfpJS7/claims' \
    --header 'Authorization: Basic dXNlci1pc3N1ZXI6cGFzc3dvcmQtaXNzdWVy' \
    --header 'Content-Type: application/json' \
    --data '{
        "credentialSchema":"https://raw.githubusercontent.com/adit313/ETHGlobalNYC2023/master/creditTransactionAuth/creditTransactionAuthNum.json",
        "type": "cardAuth",
        "credentialSubject": {
            "id": "did:polygonid:polygon:mumbai:2qF1rnQGTya3eBzvQnUh8NytX7wFa6ChFdimqyAEbX",
            "payee-address": "0x57708Ea66104082d66415Edb3379B4c47e6b35b8",
            "transaction-amount": ${document.getElementById("amount").value},
            "recipient-address": "0xC194c1Fdf12f94f6FbD46Ee77bdb7D0344c6DC7b"
        }
    }';
    `
  );

  console.log(
    "If you want to add it to your wallet, input the VC ID and you'll be able to generate a QR code"
  );
}
function myFunction2() {
  console.log(`curl --location 'http://0046-2600-4041-5c26-f00-59e2-bb23-6972-25f8.ngrok-free.app/v1/did:polygonid:polygon:mumbai:2qGSAgFbXWN8ByNZQdCwabCsKJD17N3DyKQtRfpJS7/claims/${
    document.getElementById("vc_id").value
  }/qrcode' \
  --header 'Authorization: Basic dXNlci1pc3N1ZXI6cGFzc3dvcmQtaXNzdWVy';
  `);
  console.log(
    "pop the output into https://qr.io/ and scan it with your wallet"
  );
}
