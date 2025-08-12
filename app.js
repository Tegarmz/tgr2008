<<<<<<< HEAD
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware untuk JSON
app.use(express.json());

// Setup WhatsApp client dengan session tersimpan
const client = new Client({
  authStrategy: new LocalAuth()
});

client.on('qr', qr => {
  console.log('Scan QR code ini dengan WhatsApp kamu:');
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('WhatsApp bot sudah siap!');
});

client.initialize();

// Endpoint terima jawaban dan kirim ke WhatsApp
app.post('/submit-answer', async (req, res) => {
  const answer = req.body.answer;
  if (!answer) return res.status(400).json({ error: 'Answer is required' });

  const yourNumber = '6283824581436@c.us'; // Ganti dengan nomor WA kamu, format internasional tanpa +, akhiri @c.us

  try {
    await client.sendMessage(yourNumber, `📩 Jawaban baru dari website:\n"${answer}"`);
    res.json({ status: 'success', message: 'Answer sent to WhatsApp!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

// Serve file statis dari folder public
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`);
=======
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware untuk JSON
app.use(express.json());

// Setup WhatsApp client dengan session tersimpan
const client = new Client({
  authStrategy: new LocalAuth()
});

client.on('qr', qr => {
  console.log('Scan QR code ini dengan WhatsApp kamu:');
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('WhatsApp bot sudah siap!');
});

client.initialize();

// Endpoint terima jawaban dan kirim ke WhatsApp
app.post('/submit-answer', async (req, res) => {
  const answer = req.body.answer;
  if (!answer) return res.status(400).json({ error: 'Answer is required' });

  const yourNumber = '6283824581436@c.us'; // Ganti dengan nomor WA kamu, format internasional tanpa +, akhiri @c.us

  try {
    await client.sendMessage(yourNumber, `📩 Jawaban baru dari website:\n"${answer}"`);
    res.json({ status: 'success', message: 'Answer sent to WhatsApp!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

// Serve file statis dari folder public
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`);
>>>>>>> 40c56ea (Upload Node.js project)
});
