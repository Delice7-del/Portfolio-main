async function testContact() {
  console.log('Testing contact form...');
  try {
    const res = await fetch('https://portfolio-main-3vt1.onrender.com/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Test Name',
        email: 'test@example.com',
        subject: 'Test Subject',
        message: 'This is a test message from the testing script.'
      }),
      signal: AbortSignal.timeout(15000)
    });
    const text = await res.text();
    console.log(`Status: ${res.status}`);
    console.log(`Response: ${text}`);
  } catch (error) {
    console.error('Error during fetch:', error);
  }
}

async function testSubscribe() {
  console.log('\nTesting subscribe form...');
  try {
    const res = await fetch('https://portfolio-main-3vt1.onrender.com/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: 'testsubscribe@example.com'
      }),
      signal: AbortSignal.timeout(15000)
    });
    const text = await res.text();
    console.log(`Status: ${res.status}`);
    console.log(`Response: ${text}`);
  } catch (error) {
    console.error('Error during fetch:', error);
  }
}

async function run() {
  await testContact();
  await testSubscribe();
}

run();
