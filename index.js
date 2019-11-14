const express = require('express')
const { connect } = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')

const { mongoURI, cookieKey } = require('./config/keys')

require('./models/Users')
require ('./services/passport')

connect(mongoURI)
    .then(() => {
      console.log('Successfully connected to MongoDB Atlas!')
    })
    .catch((error) => {
      console.log('Unable to connect to MongoDB Atlas!')
      console.error(error)
    })

const app = express()

app.use(
    cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [cookieKey]

    })
)
app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app)


const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Listen on port: ${PORT}`))
