const express = require('express');
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const socketServer = require('./socketServer');
const authRoutes = require('./routes/authRoutes.js');
const friendsRoutes = require('./routes/friendsRoutes.js');

const PORT = process.env.PORT || process.env.API_PORT;

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/friends', friendsRoutes);

const server = http.createServer(app);
socketServer.registerSocketServer(server);

mongoose
	.connect(process.env.MONGODB_URI, {})
	.then(() => {
		console.log('MongoDB connected');
		server.listen(PORT, () => {
			console.log(`Server running on port ${PORT}`);
		});
	})
	.catch((err) => {
		console.log(err);
	});
