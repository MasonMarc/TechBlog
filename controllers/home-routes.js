const router = require('express').Router();
const { Post, User } = require('../models/');

// get all posts for homepage
router.get('/', async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      include: {
        model: User,
        attributes: ['id', 'username']
      }
    });
    const posts = dbPostData.map((post) =>
      post.get({ plain: true })
    );
    
    console.log(posts);

    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn
    });

    
  } catch (err) {
    res.status(500).json(err);
  }
});

// get one post
router.get('/post/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the gallery
    try {
      const dbPostData = await Post.findByPk(req.params.id);
      const post = dbPostData.get({ plain: true });
      res.render('post', { post, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

router.get('/dashboard', async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    try {
    const dbPostData = await Post.findAll({where: {user_id:req.session.userId},
      include: {
        model: User,
        attributes: ['id', 'username']
      }});

    const posts = dbPostData.map(data => data.get({ plain: true }));
    res.render('dashboard', { posts, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}});

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

  res.render('dashboard');
});

module.exports = router;
