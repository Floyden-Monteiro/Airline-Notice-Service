const express = require('express');

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');

const mailsender = require('./config/email-config');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get('/api/v1/blogs', (req, res) => {});
// app.post('/api/v1/blogs', (req, res) => {});
// app.put('/api/v1/blogs', (req, res) => {});
// app.delete('/api/v1/blogs', (req, res) => {});

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async () => {
  console.log(`Successfully started the sever on PORT : ${ServerConfig.PORT}`);

  // try {
  //   const response = await mailsender.sendMail({
  //     from: ServerConfig.GMAIL_EMAIL,
  //     to: 'floydencomputer@gmail.com',
  //     subject: 'Is the service working',
  //     text: 'YES IT IS WORKING'
  //   });

  //   console.log(response);
  // } catch (error) {
  //   console.log(error);
  // }
});

// cmd "/C TASKKILL /IM node.exe /F"
