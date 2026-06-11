const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3080;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml'
};

const server = http.createServer((req, res) => {
  const decodedUrl = decodeURIComponent(req.url);
  let filePath = path.join(__dirname, decodedUrl === '/' ? 'index.html' : decodedUrl);
  
  // Prevent directory traversal
  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Acesso proibido');
    return;
  }

  const ext = path.extname(filePath);
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Arquivo não encontrado');
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(`Erro interno do servidor: ${err.code}`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.on('error', (e) => {
  if (e.code === 'EADDRINUSE') {
    console.log(`\n[AVISO] A porta ${PORT} ja esta sendo usada por outro processo.`);
    console.log(`Abrindo o navegador no endereco existente: http://localhost:${PORT}`);
    
    // Automatically open browser on Windows
    const { exec } = require('child_process');
    exec(`start http://localhost:${PORT}`);
    
    // Exit cleanly after opening browser so the console window closes automatically
    setTimeout(() => {
      process.exit(0);
    }, 1500);
  } else {
    throw e;
  }
});

server.listen(PORT, () => {
  console.log(`Servidor local do Metodo Respira e Desce rodando com sucesso!`);
  console.log(`Acesse: http://localhost:${PORT}`);
  console.log(`Pressione Ctrl+C nesta janela preta para fechar o servidor.`);
  
  // Automatically open browser on Windows
  const { exec } = require('child_process');
  exec(`start http://localhost:${PORT}`);
});

