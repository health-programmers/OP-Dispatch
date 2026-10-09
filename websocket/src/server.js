import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';

const app = express();
const httpServer = createServer(app);
const port = Number(process.env.PORT ?? 4000);
const allowedOrigin = process.env.WEB_APP_ORIGIN ?? 'http://localhost:5173';
const io = new Server(httpServer, {
  cors: {
    origin: allowedOrigin,
  },
});

app.get('/health', (_request, response) => {
  response.json({ status: 'ok', service: 'websocket' });
});

io.on('connection', (socket) => {
  socket.on('disconnect', () => {
    console.info(`Socket disconnected: ${socket.id}`);
  });
});

httpServer.listen(port, '0.0.0.0', () => {
  console.info(`WebSocket service listening on port ${port}`);
});
