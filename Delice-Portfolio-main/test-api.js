const fetch = require('node-fetch'); // wait, built-in fetch is available in node >= 18
fetch('https://portfolio-main-3vt1.onrender.com/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'Test User', email: 'test@example.com', subject: 'Test Subject', message: 'Test message' })
})
.then(res => res.json().then(data => ({status: res.status, data})))
.then(console.log)
.catch(console.error);
