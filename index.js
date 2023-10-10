require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const { prisma } = require('./config/prisma.js');
const { getAllGalleryController } = require('./controllers/galleryController.js');
const { galleryRoutes } = require('./routes/galleryRoutes.js');
const { subscribeRoutes } = require('./routes/subscribeRoutes.js');
const { createSubscribeController } = require('./controllers/subscribeController.js');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res)=> {
  res.send('Hello World');
})

app.use('/galleries', galleryRoutes)
app.get('/galleries', getAllGalleryController)
app.use('/subscribe', subscribeRoutes)
app.post('/subscribe', createSubscribeController)




app.listen(PORT, ()=> {
  console.log(`Server running on port ${PORT}`);
});