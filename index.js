require('dotenv').config();
const express = require('express')
const app = express()
const port = 3000

const githubData = {
  "login": "akashspatil121",
  "id": 54468301,
  "node_id": "MDQ6VXNlcjU0NDY4MzAx",
  "avatar_url": "https://avatars.githubusercontent.com/u/54468301?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/akashspatil121",
  "html_url": "https://github.com/akashspatil121",
  "followers_url": "https://api.github.com/users/akashspatil121/followers",
  "following_url": "https://api.github.com/users/akashspatil121/following{/other_user}",
  "gists_url": "https://api.github.com/users/akashspatil121/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/akashspatil121/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/akashspatil121/subscriptions",
  "organizations_url": "https://api.github.com/users/akashspatil121/orgs",
  "repos_url": "https://api.github.com/users/akashspatil121/repos",
  "events_url": "https://api.github.com/users/akashspatil121/events{/privacy}",
  "received_events_url": "https://api.github.com/users/akashspatil121/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Akash S Patil",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 4,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2019-08-24T08:16:54Z",
  "updated_at": "2024-04-15T11:12:52Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('ákashdotcom')
})

app.get('/login', (req, res) => {
  res.send("<h1>Please login at akash and code</h1>")
})

app.get('/youtube', (req, res) => {
  res.send("<h2>Akash Patil and code</h2>")
})

app.get('/github', (req, res) => {
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})