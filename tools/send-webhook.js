#!/usr/bin/env node

const webhookUrl = 'https://thodar.click/webhook/c404a8f7-a4bf-4574-9bac-2df4887b7063';

async function main() {
  const payload = { message: 'Hello from Qiklife' };

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    console.log(`Response status: ${res.status}`);
    const text = await res.text();
    console.log('Response body:', text);
  } catch (err) {
    console.error('Request failed:', err.message);
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
