var express = require('express');
var app = express();
var fs = require('fs');

const chainApi = require('./lib/core')('http://127.0.0.1:8545');

console.log(chainApi.get_accounts());


const PORT = 5000;
const HOST = 'localhost';


app.get('/insured/submit_policy', (req, res) => {
    // insured submits a policy
})

app.get('/insured/accept_policy', (req, res) => {
    // insured submits a price after valuation of policy
})

app.get('/insurer/submit_price', (req, res) => {
    // insured accepts the policy
})

app.get('/insurer/action', (req, res) => {
    // insurer accepts, denies or sumbits to review a given claim

})

app.get('/expert/action', (req, res) => {
    // expert begins investigation or declines
})

app.get('/claimant/make_claim', (req, res) => {
    // claimant makes a claim
})




// app.listen(PORT, HOST, (req, res) => {
//     console.log(`listening from ${HOST}:${PORT}`)
// })