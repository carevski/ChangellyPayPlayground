require('dotenv').config()
const crypto = require('node:crypto');


let BASE_URL = process.env.BASE_URL
let PRIVATE_KEY = process.env.PRIVATE_KEY
let PUBLIC_KEY = process.env.PUBLIC_KEY

// RSA private key
let privateKey = `
-----BEGIN PRIVATE KEY-----
${PRIVATE_KEY}
-----END PRIVATE KEY-----
`;

let method = 'GET';

let path = '/api/payment/v1/payments/5121bb2c-7f2e-41d0-aaf0-8a095c24ecc9';

// Time period before the expiration in seconds
let window = 3600;                                          // 60 minutes

// Expiration timestamp in seconds
let timestamp = Math.floor(Date.now() / 1000) + window;


// Request payload
let payload = [
    method,
    path,
    '',//body empty, but still include it in the signature
    timestamp
].join(':');

console.log(payload);
// Sign a SHA256 payload hash with the RSA private key
let signature = Buffer.from(
    [
        crypto.sign('RSA-SHA256', payload, privateKey).toString('base64'),
        timestamp
    ].join(':')
).toString('base64');


// Send a request
let resource = BASE_URL + path;

let options = {
    method: method,
    headers: {
        'X-Api-Key': PUBLIC_KEY,
        'X-Signature': signature,
        'Content-Type': 'application/json'
    }
};
fetch(resource, options)
    .then(response =>
        response.json().then(body =>
            console.log(body)
        )
    )
    .catch(error =>
        console.log(error)
    );