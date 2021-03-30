const express = require('express')
const path = require('path')
const http = require('http')
const fs = require('fs')

const app = express()
const server = http.createServer(app)
const port = process.env.PORT || 3000



const publicDirectoryPath = path.join(__dirname, '../frontEnd/')
app.use(express.static(publicDirectoryPath))



server.listen(port, () => {
    console.log('Server is up on port ' + port)
})