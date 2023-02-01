const router = require('express').Router();
const { Post, User } = require('../../models');

router.get('/', async (req, res) => {
  const postData = await Post.findAll({
    include: {
      model: User,
      attributes: ['id', 'username']
    }
  }).catch((err) => {
    res.json(err);
  });
  console.log(postData);
  res.json(postData);
})

router.post('/', async (req, res) => {
  try {
    const newPost = await Post.create({
      title: req.body.title,
      contents: req.body.contents,
      // make user that is signed in ID
      user_id: req.session.userId,
    });
    res.status(200).json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
