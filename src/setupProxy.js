const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/upload-data-to-google-drive',
    createProxyMiddleware({
      target: 'http://127.0.0.1:3001',
      changeOrigin: true,
    })
  );
};