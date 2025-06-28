// ping.js
import fetch from 'node-fetch';

const PING_INTERVAL = 5 * 60 * 1000; // 5 minutes
const BACKEND_URL = 'https://https://imagify-2ttj.onrender.com.onrender.com'; // Replace with actual

setInterval(async () => {
  try {
    const res = await fetch(BACKEND_URL);
    const text = await res.text();
    console.log(`[${new Date().toLocaleTimeString()}] Pinged: ${text}`);
  } catch (err) {
    console.error(`[${new Date().toLocaleTimeString()}] Error pinging server:`, err.message);
  }
}, PING_INTERVAL);
