const jwt = require('jsonwebtoken');

const expressJWT = require('express-jwt');

const express = require('express');

const app = express();

const PORT = 8080;

const SECRET = 'Week 2 Assignment';

const bodyParser = require('body-parser');

const cookieParser = require('cookie-parser');

const cors = require('cors');

app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  cors({
    origin: '*',
  })
);

let UserDB = [
  {
    username: 'Twinkle Goyal',
    userid: 'art.twis@gmail.com',
    password: 'Password!1',
  },
  {
    username: 'Nitin Goyal',
    userid: 'nitingoyal@gmail.com',
    password: 'Password!1',
  },
  {
    username: 'Karan Aggarwal',
    userid: 'karanaggarwal@gmail.com',
    password: 'Password!1',
  },
];

app.post('/api/signin', (req, res) => {
  let user = UserDB.filter((user_record) => {
    if (user_record.userid === req.body.userid) {
      return user_record;
    }
  });

  if (user.length > 0) {
    // Create token.....
    const token = jwt.sign({ _id: user.userid }, SECRET);

    // Put token in cookie.....
    res.cookie('token', token, { expire: new Date() + 9999 });

    return res.json({
      status: 'success',
      data: user[0],
      token: token,
    });
  }

  return res.json({
    status: 'failed',
    data: null,
    error: 'Invalid credentials!',
  });
});

app.post('/api/signup', (req, res) => {
  let { userid, username, password } = req.body;

  if (userid && username && password) {
    let user = UserDB.filter((user_record) => user_record.userid === userid);

    if (user.length > 0) {
      return res.json({
        status: 'failed',
        error: 'UserId already exist! Try another ID..',
      });
    }

    UserDB.push({
      username,
      userid,
      password,
    });

    return res.json({
      status: 'success',
      data: 'User created successfully!',
    });
  }

  return res.json({
    status: 'failed',
    data: 'Required fields missing!',
  });
});

app.get('/api/signout', (req, res) => {
  res.clearCookie('token');
  return res.status(200).json({
    status: 'success',
    message: 'User signout successfully!',
  });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
