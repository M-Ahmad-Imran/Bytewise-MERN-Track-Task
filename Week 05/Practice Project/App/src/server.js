const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3001; 

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/confirm-order') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const orderDetails = JSON.parse(body);
      const orderText = `Order Date: ${new Date().toLocaleString()}\n` +
                        `Order Total: $${orderDetails.total.toFixed(2)}\n` +
                        `Items:\n${orderDetails.cart.map(item => `${item.name} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`).join('\n')}\n\n`;

      const filePath = path.join(__dirname, 'orders.txt');

      fs.appendFile(filePath, orderText, (err) => {
        if (err) {
          console.error('Failed to write order to file', err);
          res.statusCode = 500;
          res.end('Failed to write order to file');
        } else {
          res.statusCode = 200;
          res.end('Order confirmed and saved');
        }
      });
    });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
