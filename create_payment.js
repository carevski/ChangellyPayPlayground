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

let method = 'POST';

let path = '/api/payment/v1/payments';


// Request body
let bodyRaw = {
    nominal_currency: 'USDT',
    nominal_amount: '99',
    title: 'Multilogin Payment',
    description: 'You are paying for Solo',
    order_id: 'ML Payment ID',
    customer_id: 'ML Customer ID',
    customer_email: 'carevski@gmail.com',
    fees_payer: 'CUSTOMER', //can be MERCHANT, who pays the fees
    payment_data: {
        arbitraty_information: 'here we can put'
    },
    pending_deadline_at: '2024-02-26T10:05:00.000Z'
};

let bodyJSON = JSON.stringify(bodyRaw);

let body = Buffer.from(bodyJSON).toString('base64');


// Time period before the expiration in seconds
let window = 3600;                                          // 60 minutes

// Expiration timestamp in seconds
let timestamp = Math.floor(Date.now() / 1000) + window;


// Request payload
let payload = [
    method,
    path,
    body,
    timestamp
].join(':');


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
    },
    body: bodyJSON
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