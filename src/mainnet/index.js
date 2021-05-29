require('dotenv').config();
const express = require('express');
const http = require('http');
const PriceFinder = require('./utils/PriceFinder');

// SERVER CONFIG
const PORT = process.env.PORT || 5000;
const app = express();
const server = http
  .createServer(app)
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

let priceMonitor;
let monitoringPrice = false;

async function monitorPrice() {
  if (monitoringPrice) {
    return;
  }

  console.log('\nChecking price...');
  monitoringPrice = true;

  PriceFinder.getPrice();

  monitoringPrice = false;
}

// Check markets every n seconds
const POLLING_INTERVAL = process.env.POLLING_INTERVAL || 5000; // 1 Second
priceMonitor = setInterval(async () => {
  await monitorPrice();
}, POLLING_INTERVAL);
