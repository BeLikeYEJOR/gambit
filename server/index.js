/* eslint-disable no-undef */
import express from "express";
import path from "path";
import { createServer } from "vite";
import api from "./api/index.js";

const isDev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT;

const server = express()
  .use(express.json())
  .use('/api', api);

if (isDev) {
  const vite = await createServer({
    server: { middlewareMode: 'html' }
  });
  server.use(vite.middlewares)
} else {
  server.use(express.static(path.resolve(__dirname, 'dist')));
  server.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
  });
}

export default server
  .listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  });;