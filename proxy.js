const http = require('http')
const httpProxy  = require('http-proxy')
const ipAddress = '0.0.0.0';
const port = 3000;
const target = 'https://192.168.1.114/owa/auth/logon.aspx?replaceCurrent=1&url=https%3a%2f%2f192.168.1.114%2fowa%2f'

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = '0';

const proxy = httpProxy.createProxyServer({
    target: {
        protocol: 'https:',
        host: '192.168.1.114',
        port: 443,
    },
    changeOrigin: true,
    secure: false
}).listen(8081);

proxy.on('proxyReq', function(proxyReq, req, res, options) {
    console.log("[+] Request: " + proxyReq.method + " -> " + proxyReq.host)
});

proxy.on('proxyRes', function(proxyRes, req, res, options) {
    console.log("[+] Response: " + proxyRes.code + " -> " + JSON.stringify(proxyRes.headers, true, 2))
});

proxy.on('error', function (err, req, res) {
    console.log(err)
    res.writeHead(500, {
        'Content-Type': 'text/plain'
    });
    res.end('Something went wrong. And we are reporting a custom error message.');
});