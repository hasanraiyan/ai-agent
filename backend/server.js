import 'dotenv/config';
import http from 'http'
import app from './app.js'

// dotenv.config();

const port = process.env.PORT || 3000


const server = http.createServer(app);

server.listen(3000, () => {
    console.log(`Server is running at port ${port}`)
})