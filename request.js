const https = require('https')

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = '0';

const options = {
    hostname: '192.168.1.114',
    path: '/owa/auth/logon.aspx?replaceCurrent=1&url=https%3a%2f%2f192.168.1.114%2fowa',
    method: 'GET',
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/115.0'
    }
};

function sendRequest(options, body, callback) {
    const req = https.request(options, (res) => {
        console.log(res.headers)
    });
    req.on('error', (error) => {
        // Handle any error that occurs during the request
        console.error('Error:');
    });
    req.end();
}

module.exports = sendRequest;