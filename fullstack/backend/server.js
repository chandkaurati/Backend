import express from 'express'

const app = express()

app.get('/', (req,res)=>{
    res.send('server is ready')
})

app.get('/api/jokes', (req, res)=>{    
    const jokes = [
        {  
          "question": "Why don't skeletons fight each other?",
          "answer": "They don't have the guts."
        },
        {
          "question": "Why couldn't the bicycle stand up by itself?",
          "answer": "It was two-tired."
        },
        {
          "question": "What do you call fake spaghetti?",
          "answer": "An impasta."
        },
        {
          "question": "Why did the scarecrow win an award?",
          "answer": "Because he was outstanding in his field."
        },
        {
          "question": "What do you get when you cross a snowman and a vampire?",
          "answer": "Frostbite."
        }
      ]
      res.send(jokes)
})

const port = process.env.PORT || 3000
app.listen(port, ()=>{
console.log('express listinig')
})
