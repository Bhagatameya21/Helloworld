/** Hello World Approach using Inbuilt http module of node
 Created By: Ameya Bhagat
 Created On: 2nd Feb 2023 10:57am
 Created For: Learning Basics of Node
 Guided  By: Jeet Patel and Chinmay Shringi
 To Execute use `node index.js` on the corresponding File Path in the Terminal
*/
const http = require('http');

const hostname = '127.0.0.1';

const port = 3000;

const server = http.createServer((req,res)=> {
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
})

server.listen(port,hostname,()=>{
    console.log(`Server Running at http://${hostname}:${port}/`);
});