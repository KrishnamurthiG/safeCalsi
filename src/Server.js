const express = require('express');
const twilio = require('twilio');
const cors = require('cors');
const app = express();
const port = 3001;


app.use(cors());
// Twilio credentials
const accountSid = 'ACdf5b05720c8e9e40b4c61171728b05ad';
const authToken = 'd26a1f24e538a0cccd88cfa6b0588821';
const twilioPhoneNumber = '+12054486586';

const client = twilio(accountSid, authToken);

app.use(express.json());

app.post('/send-sms', async (req, res) => {
  const { to, body } = req.body;

  try {
    const message = await client.messages.create({
      body,
      from: twilioPhoneNumber,
      to,
    });

    console.log('Message sent:', message.sid);
    res.status(200).json({ success: true, message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Error sending message:', error.message);
    res.status(500).json({ success: false, message: 'Error sending message.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
