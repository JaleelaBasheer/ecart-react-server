const jsonServer = require('json-server')

const server = jsonServer.create()

const router = jsonServer.router("db.json")

const middleware = jsonServer.defaults()

const PORT = process.env.PORT || 4000

server.use(middleware)
server.use(router)

server.listen(PORT,()=>{
    console.log(`E-Cart server stared at port ${PORT} `);
})