# Testing Changelly Pay Here

To get it going

## create .env file with 

```
BASE_URL=https://api.pay.changelly.com
PRIVATE_KEY=<provdied by changelly>
PUBLIC_KEY=<provided by changelly>
```

## Run it

- first setup node with nvm use
- then create a payment with `node create_payment.json`
- then to get the payment status use `node get_payment.json`


## Changelly Notes
- Talking to their API is a bit complicated, as it is convoluted way of signing the request.
- They do not have sandbox. They recommend using prod and a network that has small fees, ex TRON
- Payment creation can not be made with EUR/USD. We have to create them with crypto currency.
- The dashboard will only support USD. EUR is on the roadmap
- We can override success/fail redirect URL but NOT the callback URL. This means that only one env will be functional. Or we create a second account.
- We can not fetch payments by our own ID but only by their Payment ID. This means we would have to store it.
- There is not any kind of idempotency going on. You can create the same payment with the same arguments over and over.
- Dashboard is kind of poor in the sense that you can not do much with it. You can not cancel a payment or anything like that.
- Once the vendor goes through a cypto selection they are locked into it. Clicking on the link again does not offer to choose again
- I'm not sure when do payments expire, I used the pending_deadline_at parameter but does not seem to work. At least I did not recieve a callback in due time.
- By default the account is custodial and we need to withdraw manually (at least is how it looks like)
- I did not test callbacks, 