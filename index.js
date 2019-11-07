const express = require('express')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const { googleClientID, googleClientSecret } = require('./config/keys')

const app = express()

passport.use(new GoogleStrategy({
      clientID: googleClientID,
      clientSecret: googleClientSecret,
      callbackURL: '/auth/google/callback'
    }, (aT) => {
      console.log(aT)
    })
)

app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}))

app.get('/auth/google/callback', ((req, res) => {
  console.log(res)
})
)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Listen on port: ${PORT}`))