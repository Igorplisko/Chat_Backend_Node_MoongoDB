import mongoose from 'mongoose'
import express from 'express'

import User from "./schemas/User"

const app = express()


mongoose.connect('mongodb://localhost:27017/chat', { useNewUrlParser: true, });

app.get('/', (_: any, res: any) => {
   res.send('Hello World!')
   const UsersGet = new User({ email: 'Igor@domain.com', fullName: 'Test Igor' });
   UsersGet.save().then(() => console.log('User created'))


});





app.listen(3000, function () {
   console.log(`Example app listening at http://localhost:3000`)
})
