GET:/api/payment/v1/payments/5121bb2c-7f2e-41d0-aaf0-8a095c24ecc9::1708940549
{
  id: '5121bb2c-7f2e-41d0-aaf0-8a095c24ecc9',
  project_id: '8e4bde57-2034-492c-b9f8-2e03f593f6e1',
  type: 'INVOICE',
  state: 'WAITING',
  nominal_currency: 'USDT',
  nominal_amount: '99',
  fees_payer: 'CUSTOMER',
  details: {
    title: 'Multilogin Payment',
    description: 'You are paying for Solo',
    success_redirect_url: 'https://billing.multilogin.com',
    failure_redirect_url: 'https://billing.multilogin.com',
    order_id: 'ML Payment ID',
    customer_id: 'ML Customer ID',
    customer_email: 'carevski@gmail.com',
    other_data: { arbitraty_information: 'here we can put' }
  },
  payment_url: 'https://app.pay.changelly.com/payment/5121bb2c-7f2e-41d0-aaf0-8a095c24ecc9',
  selected_payment_method: {
    selected_at: '2024-02-26T08:16:50Z',
    nominal_holding_swap: { rate: '1', time: '2024-02-26T08:16:50Z' },
    holding_currency: 'USDT',
    payment_fee: '0.396',
    holding_amount: '99.396',
    payin_holding_swap: { rate: '0.9992501349357641', time: '2024-02-26T08:16:50Z' },
    payin_currency: 'USDC',
    payin_network: 'ETH',
    expected_payin_amount: '101.97059',
    remaining_payin_amount: '101.97059',
    minimum_payin_amount: '3.76',
    payin_address: '0xf2bbaff68d3b96a077a70a2ca775f498a8c0b2d8',
    payin_address_tag: '',
    payins: []
  },
  created_at: '2024-02-26T08:15:37Z',
  updated_at: '2024-02-26T08:16:50Z',
  deadline_at: '2024-02-26T20:16:50Z'
}