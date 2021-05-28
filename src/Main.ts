import { config } from 'dotenv'
config()

import express from 'express'
import APIRouter from './Routes/API'

const app = express()

app.use('/api', APIRouter)

app.listen(process.env.PORT || 4000, () => console.log('SERVER STARTED'))
