import mongoose from 'mongoose'
import express from 'express'
import bodyParser from 'body-parser'

import User from "./schemas/User"

const app = express()


// app.use(bodyParser.json())

async function start() {
   try {

      await mongoose.connect('mongodb://localhost:27017/chat', {
         useNewUrlParser: true,
         useUnifiedTopology: true
      });
      app.listen(3000, function () {
         console.log(`Example app listening at http://localhost:3000`)
      })
   } catch (e) {
      console.log(e)
   }
}


// mongoose.connect('mongodb://localhost:27017/chat', { useNewUrlParser: true, useFindAndModify: false });




app.get('/create', (req: any, res: any) => {
   res.send('Hello World!')
   const userCreate = new User({ email: 'Igor@domain.com', fullName: 'Test Igor' });
   userCreate.save().then((obj: any) => {


      res.json(obj)

   })
});


start()


// app.listen(3000, function () {
//    console.log(`Example app listening at http://localhost:3000`)
// })
