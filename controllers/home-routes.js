const router = require('express').Router();
const { Post } = require('../models/');

// get all posts for homepage
router.get('/', async (req, res) => {
  try {
    const dbPostData = await Post.findAll();
    const posts = dbPostData.map((post) =>
      post.get({ plain: true })
    );

    res.render('homepage', {
      posts
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get one post
router.get('/post/:id', async (req, res) => {  
    try {
      const dbPostData = await Post.findByPk(req.params.id);
      const post = dbPostData.get({ plain: true });
      res.render('post', {post});
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
);

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

router.get('/dashboard', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('dashboard');
});

module.exports = router;
