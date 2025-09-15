import express from 'express'

const app = express();

// app.get('/', (req, res) => {
//     res.send('server is ready');
// });

app.get('/api/jokes', (req, res) => {
    const jokes = [
  {
    id: 1,
    title: "Programmer Joke",
    content: "Why do programmers prefer dark mode? Because light attracts bugs!"
  },
  {
    id: 2,
    title: "Dad Joke",
    content: "I told my wife she was drawing her eyebrows too high. She looked surprised."
  },
  {
    id: 3,
    title: "Knock Knock",
    content: "Knock, knock. Who’s there? Cow says. Cow says who? No, cow says moooo!"
  },
  {
    id: 4,
    title: "Office Joke",
    content: "Why don’t scientists trust atoms? Because they make up everything!"
  },
  {
    id: 5,
    title: "Tech Joke",
    content: "I would tell you a UDP joke, but you might not get it."
  }
];

    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server at http://localhost:${port}`);
});