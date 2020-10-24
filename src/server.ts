import express from 'express'

const app = express()

app.get('/hw', (response, request) => {
    request.status(200).json({ message: 'Hello World!' })
})

const port = 3333

app.listen(port, () => {
    console.log(`API running in localhost:${port}`)
})
