const redis = require('redis')
const client = redis.createClient({
    host: 'localhost',
    port: 6123,
    password: 'my secret',
    db: 1,
});
async function run() {
    client.on('error',function (error) {
        console.log(`Connection failed: ${error}`)
    })
   await client.connect()
}
run().then();
module.exports = client

